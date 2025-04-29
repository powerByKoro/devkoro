import React from "react";
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer-continued";

const LargeDiffExample = () => {
  // Большой исходный файл (старая версия)
  const oldCode = `/**
 * Сервис для работы с пользователями
 * Версия 2.0
 */

import axios from 'axios';
import moment from 'moment';

// Конфигурация API
const API_CONFIG = {
  baseURL: 'https://api.example.com/v1',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json'
  }
};

// Основной клиент API
const apiClient = axios.create(API_CONFIG);

/**
 * Получение списка пользователей
 * @param {number} limit - Максимальное количество
 * @returns {Promise<Array>}
 */
export const fetchUsers = async (limit = 10) => {
  try {
    const response = await apiClient.get(\`/users?limit=\${limit}\`);
    return response.data.users.map(user => ({
      id: user.id,
      name: \`\${user.firstName} \${user.lastName}\`,
      email: user.email,
      registered: user.createdAt
    }));
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error);
    return [];
  }
};

/**
 * Фильтрация пользователей по дате регистрации
 * @param {Array} users - Массив пользователей
 * @param {string} dateFrom - Дата в формате YYYY-MM-DD
 * @returns {Array}
 */
export const filterUsersByDate = (users, dateFrom) => {
  return users.filter(user => 
    moment(user.registered).isSameOrAfter(dateFrom)
  );
};

/**
 * Форматирование пользователя для отображения
 * @param {Object} user - Объект пользователя
 * @returns {string}
 */
export const formatUser = (user) => {
  return \`
    <div class="user-card">
      <h3>\${user.name}</h3>
      <p>Email: \${user.email}</p>
      <p>Зарегистрирован: \${moment(user.registered).format('DD.MM.YYYY')}</p>
    </div>
  \`;
};

// Утилиты для работы с localStorage
export const storage = {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};

// Константы для типов действий
export const ACTION_TYPES = {
  ADD_USER: 'ADD_USER',
  UPDATE_USER: 'UPDATE_USER',
  DELETE_USER: 'DELETE_USER'
};`;

  // Новая версия файла с изменениями
  const newCode = `/**
 * Сервис для работы с пользователями
 * Версия 2.1
 */

import axios from 'axios';
import { format, parseISO, isAfter } from 'date-fns';

// Конфигурация API (обновлена)
const API_CONFIG = {
  baseURL: 'https://api.example.com/v2',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + process.env.API_TOKEN
  }
};

// Основной клиент API с перехватчиком ошибок
const apiClient = axios.create(API_CONFIG);

apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.config.url, error.message);
    return Promise.reject(error);
  }
);

/**
 * Получение списка пользователей (обновлено)
 * @param {number} limit - Максимальное количество
 * @returns {Promise<Array>}
 * @throws {Error} При ошибке сети
 */
export const fetchUsers = async (limit = 25) => {
  const response = await apiClient.get(\`/users?limit=\${limit}\`);
  return response.data.map(user => ({
    userId: user.id,
    fullName: \`\${user.firstName} \${user.lastName}\`,
    contact: user.email,
    registrationDate: user.meta.createdAt,
    isVerified: user.verified
  }));
};

/**
 * Фильтрация пользователей по дате регистрации (оптимизировано)
 * @param {Array} users - Массив пользователей
 * @param {string} dateFrom - Дата в формате ISO
 * @returns {Array}
 */
export const filterUsersByDate = (users, dateFrom) => {
  const date = parseISO(dateFrom);
  return users.filter(user => 
    isAfter(parseISO(user.registrationDate), date)
  );
};

/**
 * Форматирование пользователя для отображения (упрощено)
 * @param {Object} user - Объект пользователя
 * @returns {string}
 */
export const formatUser = (user) => {
  return \`
    <article class="user-profile">
      <h2>\${user.fullName}</h2>
      <address>\${user.contact}</address>
      <time>\${format(parseISO(user.registrationDate), 'PPP')}</time>
    </article>
  \`;
};

// Утилиты для работы с localStorage (не изменились)
export const storage = {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};

// Константы для типов действий (добавлены новые)
export const ACTION_TYPES = {
  ADD_USER: 'ADD_USER',
  UPDATE_USER: 'UPDATE_USER',
  DELETE_USER: 'DELETE_USER',
  IMPORT_USERS: 'IMPORT_USERS',
  EXPORT_USERS: 'EXPORT_USERS'
};`;

  return (
    <div
      style={{
        padding: 16,
        maxWidth: "100%",
        textAlign: "left",
      }}
    >
      <h2 style={{ marginBottom: 16 }}>
        Сравнение сервиса работы с пользователями
      </h2>

      <div
        style={{
          border: "1px solid #e1e4e8",
          borderRadius: 6, // Фиксированная высота
          overflow: "auto", // Внутренний скролл
          textAlign: "left",
          height: "80vh",
        }}
      >
        <ReactDiffViewer
          oldValue={oldCode}
          newValue={newCode}
          splitView={true}
          compareMethod={DiffMethod.CHARS}
          showDiffOnly={false}
          leftTitle="user-service.js (v1.0)"
          rightTitle="user-service.js (v2.1)"
          styles={{
            diffContainer: {
              width: "100%",
              textAlign: "left",
              pre: {
                lineHeight: 1.5,
                fontFamily:
                  '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
                fontSize: 13,
              },
            },
            line: {
              wordBreak: "break-word",
              padding: "0 10px",
            },
            gutter: {
              padding: "0 10px",
            },
            contentText: {
              textAlign: "left",
            },
          }}
        />
      </div>
    </div>
  );
};

export default LargeDiffExample;
