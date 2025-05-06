import React from "react";
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer-continued";

const LargeDiffExample = () => {
  // Большой исходный файл (старая версия)
  const oldCode = `Cryptochecksum: d82c6e22 22576cc1 1df58e70 493767b0 

!

ASA Version 8.2(5)13 

!

hostname CheckPoint

domain-name xz.ru

enable password f0k3P1NlXHYkRqbn encrypted

passwd f0k3P1NlXHYkRqbn encrypted

names

name 100.200.139.0 Net_100.200.139.0 description Management_Net_M3

name 100.200.143.0 Net_100.200.143.0 description CRA_Pretenzii

name 100.200.149.0 Net_100.200.149.0 description Management_Net_M7

name 100.200.150.0 Net_100.200.150.0 description CRA_Net_M7

name 10.31.5.0 Net_10.31.5.0 description COD_GD

name 100.200.130.0 Net_100.200.130.0 description CRA_Net_M3

name 100.200.104.0 Net_100.200.104.0 description Printers_M3

name 100.200.106.0 Net_100.200.106.0 description Net_for_GD_Bryanskaya

name 100.200.24.0 Net_100.200.24.0 description CRA_Bryanskaya

name 100.200.64.0 Net_100.200.64.0 description Printer_M5

name 100.200.69.0 Net_100.200.69.0 description Net_Goncharnaya_stage_3

name 100.200.80.0 Net_100.200.80.0 description Printer_M7

name 100.200.88.0 Net_100.200.88.0 description Printer_M34

name 100.200.96.0 Net_100.200.96.0 description Printer_M10

name 10.30.0.0 Net_10.30.0.0 description GD

name 100.200.128.0 Net_100.200.128.0 description EWSD

name 100.200.159.0 Net_100.200.159.0 description ARM_AMTS_AXE

name 100.200.160.0 Net_100.200.160.0 description AMTS_AXE

name 10.0.16.0 Net_10.0.16.0 description GD

name 10.42.0.0 Net_10.42.0.0 description Centr

name 100.200.4.0 Net_100.200.4.0

name 100.100.100.0 Net_100.100.100.0

name 10.2.10.0 Net_10.2.10.0 description GD

name 100.200.67.0 Net_100.200.67.0 description UIT_M5

name 100.200.89.0 Net_100.200.89.0 description Users_M34

name 10.0.0.0 Net_10.0.0.0

name 192.168.1.0 Net_192.168.1.0 description MCNTT_COV

name 192.168.111.0 Net_192.168.111.0 description Kostroma_MCNTT

name 198.18.92.227 PO_198.18.92.227

name 100.200.141.46 NTP_M3_100.200.141.46

name 100.200.0.45 loginov

name 100.200.7.0 Net_100.200.7.0 description LVS_PKP

name 100.200.141.50 smt03ts50 description Citrix

name 100.200.141.51 smt03ts51 description Citrix

name 100.200.141.52 smt03ts52 description Citrix

name 100.200.30.0 Net_100.200.30.0 description RUBIN

name 10.35.0.0 Net_10.35.0.0 description Bekasovo

name 100.200.97.0 Net_100.200.97.0 description Users_M10

name 100.200.28.0 Net_100.200.28.0

name 100.200.105.0 Net_100.200.105.0 description Users_M3

name 100.200.65.0 Net_100.200.65.0 description Users_M5

name 100.200.130.64 SMT03TS064

name 100.200.72.0 Net_100.200.72.0

name 10.2.31.192 Net_10.2.31.192 description Kostroma_MCNTT_S-Terra_GD

name 100.200.150.10 R15 description MetaFrame(Express_schet)

name 10.22.0.0 Net_10.22.0.0 description Moskovsky_filial

name 100.200.130.203 LK

name 100.200.130.204 LK1

name 100.200.130.200 Oracle_CSS

name 100.200.130.220 SMT03FS008 description CRA_Distr

name 100.200.130.206 ASR_BFN_Test_DB

name 100.200.130.201 Oracle_CSS_Test_DB

name 100.200.130.205 Test_srv_ASR_BFN

name 100.200.130.209 SCS

name 10.31.54.2 SCS_GD

name 100.200.36.0 Net_100.200.36.0 description Skylink

name 100.200.141.40 Portal_CRA

name 10.131.5.0 Net_10.131.5.0

name 10.161.133.0 Net_10.161.133.0 description Net_for_monitoring_backup_SRV_in_ERCOV

name 10.255.0.0 Net_10.255.0.0 description MRF_Center

name 100.200.111.0 Net_100.200.111.0

name 192.168.50.0 Net_192.168.50.0 description DMZ

name 198.18.18.0 Net_198.18.18.0

name 87.226.149.64 Net_87.226.149.64

name 10.36.0.0 Net_10.36.0.0

name 100.200.2.187 MushtaovaNA_PC2

name 100.200.2.204 PostnikovaLB_PC

name 91.151.207.40 TELECOM_DESIGN_host1

name 84.204.42.162 TELECOM_DESIGN_host2

name 10.0.24.40 Server_Lotus_NEW_MMT0

name 10.0.24.41 Server_Lotus_NEW_MMT1

name 10.30.1.52 sks01ap005

name 10.30.1.70 Server_PORTAL_GD

name 10.31.3.55 Server_MOSASO

name 10.31.130.29 Server_ISS_RISS

name 100.200.0.5 Semenov_PC

name 100.200.0.20 Vinogradov_PC

name 100.200.0.30 Server_NNM

name 100.200.0.40 Simonin_PC

name 100.200.0.44 Stepin_PC

name 100.200.0.57 Belov_PC

name 100.200.0.76 Nikiforov_PC

name 100.200.0.86 GolunovDK_PC

name 100.200.0.90 Glukhov_PC

name 100.200.0.109 Server_HELPDESK

name 100.200.0.111 Server_SMT05SQ203

name 100.200.0.183 IvanenkoKB

name 100.200.0.229 Bruhanov_PC

name 100.200.1.30 Belyaev_PC

name 100.200.1.39 Server_SMT05SUS

name 100.200.1.42 Server_DC1

name 100.200.1.43 Server_FIN

name 100.200.1.48 Server_LOTUS_main

name 100.200.1.49 Server_LOTUS_m34

name 100.200.1.59 Server_Omega

name 100.200.1.122 JuravlevaEA_PC

name 100.200.1.173 HadikovaOM_PC

name 100.200.1.240 Glukhov_PC2

name 100.200.1.252 KoroteevVA_PC

name 100.200.2.55 KulikovaTV_PC

name 100.200.2.128 Server_SMT05BC003

name 100.200.2.155 BolshakovBN_PC2

name 100.200.3.4 Server_SMT05EX001

name 100.200.3.5 Server_SMT05FS001

name 100.200.3.16 Server_SMT05AV001

name 100.200.3.18 Server_SMT05DC001

name 100.200.3.22 Server_SMT05BC001

name 100.200.3.36 Server_SMT34EX001

name 100.200.3.41 Server_SMT34FS001

name 100.200.3.44 Server_SMT34AV001

name 100.200.3.45 Server_SMT34DC001

name 100.200.3.51 Server_BOSS

name 100.200.2.82 RozhinaON_PC

name 100.200.2.86 BologovaLV_PC

name 100.200.2.88 RyabovaVV_PC

name 100.200.2.162 Smena_OSP_PC

name 100.200.2.190 LomovskayaES_PC

name 100.200.3.167 Server_SMT05LT001

name 100.200.3.168 Server_SMT05LT002

name 100.200.3.213 Server_PORTAL_MMT

name 100.200.3.216 km-3050_m34k226

name 100.200.3.236 printer_km3050_m5_441

name 100.200.3.237 printer_km3050_gonch_26_1418

name 100.200.6.206 Server_ELENA

name 100.200.29.50 Server_SMT05PCM

name 100.200.31.4 Server_NTP_SSVG

name 100.200.130.31 CRA_KozyrevOV_PC

name 100.200.130.39 CRA_TeterevOV_PC

name 100.200.130.109 CRA_LikharevYV_PC

name 100.200.130.110 CRA_Kozubets_Kamenev_PC

name 100.200.130.113 CRA_Sergeev_Pischikov

name 100.200.130.120 CRA_FilatovVA_PC

name 100.200.130.196 CRA_Monitor_1

name 100.200.150.126 CRA_LisovskiyVV_PC

name 100.200.150.135 CRA_RomanovMN_PC

name 100.200.0.100 Smena_CIT

name 100.200.0.103 Smena_CIT1

name 100.200.1.100 Smena_CIT2

name 100.200.0.10 Cluster_for_VVP

name 100.200.0.89 MoskalenkoEV

name 87.226.149.74 vn.mmtel.ru

name 100.200.1.63 Belyaev_Asterix

name 100.200.1.50 ASA-1HotLine

name 100.200.2.50 ASA-2HotLine

name 192.168.50.40 Server_RADIUS_SkyLink

name 100.200.0.107 Bruhanov_PC3

name 195.28.32.3 mail.ntt.ru

name 100.200.1.176 Avtaeva_PC

name 100.200.1.157 Terenteva_PC

name 100.200.3.154 Medvedkina_PC

name 100.200.2.219 Trifonova_PC

name 194.197.79.18 TELECOM_DESIGN_host3

name 100.200.69.99 MushtaovaNA_PC3

name 193.33.122.61 Svyaz_BANK_online

name 100.200.0.42 PC_INET_r1004_Vibory1

name 100.200.0.43 PC_INET_r1004_Vibory2

name 100.200.0.49 PC_INET_r1004_Vibory3

name 100.200.0.59 PC_INET_r1004_Vibory4

name 100.200.0.62 PC_INET_r1004_Vibory5

name 100.200.0.65 PC_INET_r1004_Vibory6

name 100.200.0.71 PC_INET_r1004_Vibory7

name 100.200.2.22 PC_INET_r1008_Vib1

name 100.200.2.61 PC_INET_r1008_Vib2

name 100.200.2.96 PC_INET_r1008_Vib3

name 100.200.1.54 PC_INET_r907_Vib1

name 212.176.15.63 Promsvyazbank

name 193.200.10.10 Promsvyazbank_new

name 100.200.67.43 host_100.200.67.43

name 10.50.0.0 Net_10.50.0.0 description MSK_branch

name 100.200.130.92 smt03edu001.mt.rt.ru

name 100.200.130.111 smt03eip006

name 100.200.130.41 TechnoGrad41

name 100.200.130.42 TechnoGrad42

name 100.200.130.43 TechnoGrad43

name 100.200.130.44 TechnoGrad44

name 100.200.111.253 TechnoGrad_VPN description Host_TechnoGrad_VPN

name 100.200.139.29 AMT03VISE001 description ISE Server

name 100.200.111.240 TechnoGrad_VPN8 description Pool_for_VPN_TechnoGrad

name 100.200.32.188 srv_aaa_skylink

name 100.200.32.189 srv_aaa_skylink_2

name 100.200.2.41 Paligin_PC

!

interface GigabitEthernet0/0

 no nameif

 no security-level

 no ip address

!

interface GigabitEthernet0/0.5

 shutdown

 vlan 5

 nameif toCRA_150

 security-level 23

 ip address 100.200.150.1 255.255.255.0 

!

interface GigabitEthernet0/0.105

 vlan 105

 nameif KSPD

 security-level 0

 ip address 100.200.1.2 255.255.252.0 

!

interface GigabitEthernet0/0.158

 description Converter_M7

 vlan 158

 nameif Converter_158

 security-level 25

 ip address 100.200.158.33 255.255.255.224 

!

interface GigabitEthernet0/0.159

 description APM-AMTC-AXE

 vlan 159

 nameif ARM-AMTC-AXE_159

 security-level 22

 ip address 100.200.159.1 255.255.255.0 

!

interface GigabitEthernet0/0.160

 description AMTC-AXE

 vlan 160

 nameif AMTC-AXE_160

 security-level 21

 ip address 100.200.160.254 255.255.255.0 

!

interface GigabitEthernet0/0.703

 vlan 703

 nameif Mediation

 security-level 0

 ip address 10.54.0.1 255.255.255.248 

!

interface GigabitEthernet0/1

 no nameif

 no security-level

 no ip address

!

interface GigabitEthernet0/2

 no nameif

 no security-level

 no ip address

!

interface GigabitEthernet0/3

 shutdown

 no nameif

 no security-level

 no ip address

!

interface Management0/0

 nameif management

 security-level 100

 ip address 100.200.29.53 255.255.255.0 

 management-only

!

interface GigabitEthernet1/0

 no nameif

 no security-level

 no ip address

!

interface GigabitEthernet1/0.605

 vlan 605

 nameif COD_141

 security-level 100

 ip address 100.200.141.1 255.255.255.0 

!

interface GigabitEthernet1/1

 no nameif

 no security-level

 no ip address

!

interface GigabitEthernet1/1.500

 vlan 500

 nameif GD_250

 security-level 50

 ip address 100.200.250.1 255.255.255.252 

!

interface GigabitEthernet1/2

 shutdown

 no nameif

 no security-level

 no ip address

!

interface GigabitEthernet1/3

 shutdown

 no nameif

 no security-level

 no ip address

!

banner motd *********************************

banner motd Hello!!!

banner motd 

banner motd This is the Firewall for COD Filial Stolichnii

banner motd 

banner motd Go away!!!

banner motd *********************************

boot system disk0:/asa825-13-k8.bin

ftp mode passive

clock timezone MSK 4

dns server-group DefaultDNS

 domain-name mt.rt.ru

same-security-traffic permit inter-interface

same-security-traffic permit intra-interface

object-group service traceroute udp

 port-object range 33434 33524

object-group service RDP tcp

 port-object eq 3389

object-group network CRA

 description CRA_Networks

 network-object Net_100.200.130.0 255.255.255.0

 network-object Net_100.200.139.0 255.255.255.0

 network-object 100.200.141.0 255.255.255.0

 network-object Net_100.200.143.0 255.255.255.0

 network-object Net_100.200.149.0 255.255.255.0

 network-object Net_100.200.150.0 255.255.255.0

object-group service General_Domain

 service-object tcp eq 995 

 service-object tcp eq netbios-ssn 

 service-object udp eq netbios-dgm 

 service-object udp eq netbios-ns 

 service-object tcp-udp eq 135 

object-group network APK_Obzvon

 network-object host 100.200.150.69

 network-object host 100.200.150.70

object-group service MS_SQL tcp

 port-object eq 1433

 port-object eq 1434

 port-object eq sqlnet

object-group network CRA_COD

 network-object Net_100.200.130.0 255.255.255.0

 network-object Net_100.200.150.0 255.255.255.0

object-group network PRINTER_NETWORKS

 network-object Net_100.200.104.0 255.255.255.0

 network-object Net_100.200.64.0 255.255.255.0

 network-object Net_100.200.80.0 255.255.255.0

 network-object Net_100.200.88.0 255.255.255.0

 network-object Net_100.200.96.0 255.255.255.0

object-group network CRA_TU

 network-object Net_100.200.128.0 255.255.255.0

 network-object Net_100.200.159.0 255.255.255.0

 network-object Net_100.200.160.0 255.255.255.0

object-group network CRA_and_TU

 group-object CRA

 group-object CRA_TU

object-group service Web_services

 service-object tcp eq 7789 

 service-object tcp eq 8080 

 service-object tcp eq 8443 

 service-object tcp eq www 

 service-object tcp eq https 

object-group network ARM_Rubin

 network-object host 100.200.30.44

 network-object host 100.200.30.52

 network-object host 100.200.30.7

 network-object host 100.200.30.8

 network-object host 100.200.30.31

 network-object host 100.200.30.83

 network-object host 100.200.30.84

 network-object host 100.200.30.93

object-group network CIT_Admins

 network-object host loginov

object-group service Citrix

 service-object tcp eq 2598 

 service-object tcp eq citrix-ica 

 service-object tcp eq www 

 service-object udp eq 1604 

object-group network Citrix_servers

 network-object host smt03ts50

 network-object host smt03ts51

 network-object host smt03ts52

 network-object host 100.200.141.90

object-group service FTP_HTTP_SQL

 service-object tcp eq 8085 

 service-object tcp eq 8443 

 service-object tcp eq ftp 

 service-object tcp eq ftp-data 

 service-object tcp eq www 

 service-object tcp eq sqlnet 

object-group network Net_130_servers

 network-object host Oracle_CSS

 network-object host LK

 network-object host LK1

 network-object host SMT03FS008

 network-object host 100.200.130.50

 network-object host Oracle_CSS_Test_DB

 network-object host ASR_BFN_Test_DB

 network-object host Test_srv_ASR_BFN

object-group service Windows_share tcp-udp

 port-object eq 445

object-group protocol TCPUDP

 protocol-object udp

 protocol-object tcp

object-group network Tacacs_MMTEL

 network-object host 192.168.50.25

 network-object host 192.168.50.26

object-group network CRA_Management

 network-object Net_100.200.139.0 255.255.255.0

 network-object Net_100.200.149.0 255.255.255.0

object-group network CRA_DC_AV

 network-object host 100.200.130.15

 network-object host 100.200.141.100

 network-object host 100.200.150.129

 network-object host 100.200.150.130

object-group service VPN

 description for_VPN

 service-object gre 

 service-object esp 

object-group service Access_from_COD

 description To_any

 service-object tcp eq 1526 

 service-object tcp eq 3389 

 service-object tcp eq 7777 

 service-object tcp eq 8080 

 service-object tcp eq www 

 service-object tcp eq sqlnet 

 service-object tcp eq ssh 

 service-object tcp eq telnet 

 service-object udp eq 259 

 service-object tcp eq ftp 

 service-object tcp eq ftp-data 

 service-object tcp eq https 

object-group network iLO_COTUSS

 network-object host 100.200.149.35

 network-object host 100.200.149.90

 network-object host 100.200.149.91

 network-object host 100.200.149.92

object-group network ESPP_Test

 description Integrated_billing_Skylink_NKS_RT

 network-object host 100.200.130.51

 network-object host 100.200.130.52

 network-object host 100.200.130.53

 network-object host 100.200.130.1

 network-object host 100.200.130.151

 network-object host 100.200.130.152

 network-object host 100.200.130.153

 network-object host 100.200.130.154

 network-object host 100.200.130.155

 network-object host 100.200.130.156

 network-object host 100.200.130.157

 network-object host 100.200.130.158

 network-object host 100.200.130.159

object-group network COD_Billing_test

 description access_from_Skylink_to_COD_Billing_Test

 network-object host 100.200.130.57

 network-object host 100.200.130.60

 network-object host 100.200.130.65

 network-object host 100.200.130.67

 network-object host 100.200.130.68

 network-object host 100.200.130.69

 network-object host 100.200.130.70

 network-object host 100.200.130.71

 network-object host 100.200.130.1

 network-object host 100.200.130.72

 network-object host 100.200.130.73

 network-object host 100.200.130.78

 network-object host 100.200.130.79

 network-object host 100.200.130.52

 network-object host 100.200.130.151

 network-object host 100.200.130.152

 network-object host 100.200.130.156

 network-object host 100.200.130.157

 network-object host 100.200.130.158

 network-object host 100.200.130.159

 network-object host 100.200.130.51

 network-object host 100.200.130.53

 network-object host 100.200.130.84

object-group service Oracle_OMS tcp-udp

 port-object eq 1159

object-group network COV

 network-object Net_100.200.4.0 255.255.255.0

 network-object 100.200.5.0 255.255.255.0

 network-object 100.200.50.0 255.255.255.0

object-group service NKS_to_ESXi_service

 service-object tcp eq www 

 service-object tcp eq https 

 service-object tcp eq ssh 

 service-object tcp eq 902 

 service-object tcp eq 903 

object-group network NKS_to_ESXi

 network-object host 100.200.181.195

 network-object host 100.200.181.196

 network-object host 100.200.181.36

 network-object host 100.200.32.64

 network-object host 100.200.181.181

 network-object host 100.200.181.189

object-group service NKS_VMWARE

 service-object tcp eq 1414 

 service-object tcp eq 4414 

 service-object tcp eq 7080 

object-group network NKS_VMWARE_PC

 network-object host 100.200.181.181

 network-object host 100.200.181.36

object-group network Teterev_users_NKS

 network-object host 100.200.181.181

 network-object host 100.200.181.36

 network-object host 100.200.181.196

 network-object host 100.200.181.195

 network-object host 100.200.181.210

object-group network ADMIN_LVS

 description OSA

network-object host 100.200.203.95

object-group network SKYLINK_RM

 network-object host 100.200.203.95

 network-object host 100.200.203.96

object-group network Techograd_servers

 network-object host TechnoGrad41

 network-object host TechnoGrad42

 network-object host TechnoGrad43

 network-object host TechnoGrad44

object-group network Technograd_srv_from_net_10.50

 network-object host 10.50.44.1

 network-object host 10.50.44.2

 network-object host 10.50.44.5

 network-object host 10.50.44.6

 network-object host 10.50.47.110

 network-object host 10.50.47.40

 network-object host 10.50.65.18

 network-object host 10.50.67.27

 network-object Net_100.200.105.0 255.255.255.0

object-group service DM_INLINE_UDP_1 udp

 port-object eq radius

 port-object eq radius-acct

object-group service DM_INLINE_UDP_2 udp

 port-object eq radius

 port-object eq radius-acct

object-group network DM_INLINE_NETWORK_1

 network-object TechnoGrad_VPN8 255.255.255.248

 network-object host TechnoGrad_VPN

object-group service Service_Converter_158.32

 service-object tcp eq 2004 

 service-object tcp eq 4004 

 service-object tcp eq telnet 

 service-object udp eq netbios-ns 

object-group network From_CPOK_Lite_MVNO

 network-object host 100.200.7.131

 network-object host 100.200.7.132

 network-object host 100.200.7.143

 network-object host 100.200.7.174

 network-object host 100.200.7.175

 network-object host 100.200.7.212

 network-object host 100.200.7.21

 network-object host 100.200.7.22

object-group network SRV_AAA_Skylink_Borisov

 network-object host srv_aaa_skylink

 network-object host srv_aaa_skylink_2

object-group service DM_INLINE_TCP_1 tcp

 port-object eq ftp

 port-object eq ftp-data

object-group service DM_INLINE_TCP_2 tcp

 port-object eq ftp

 port-object eq ftp-data

object-group service DM_INLINE_TCP_3 tcp

 port-object eq ftp

 port-object eq ftp-data

access-list toCRA extended permit ip any any log debugging 

access-list toCRA extended permit icmp any any 

access-list KSPD extended permit icmp 100.200.0.0 255.255.0.0 100.200.158.32 255.255.255.224 log 

access-list KSPD extended permit ip 100.200.0.0 255.255.0.0 100.200.158.32 255.255.255.224 log 

access-list KSPD remark access_from_Ural_10.61_10.255

access-list KSPD extended permit tcp any host 100.200.141.77 eq 8443 log 

access-list KSPD extended permit ip host 100.200.29.29 host 100.200.150.30 

access-list KSPD extended permit ip host 100.200.29.29 host 100.200.150.31 

access-list KSPD extended permit ip Net_10.50.0.0 255.255.0.0 host smt03edu001.mt.rt.ru 

access-list KSPD extended permit ip object-group COV object-group CRA_and_TU 

access-list KSPD extended permit ip any host 100.200.130.81 log 

access-list KSPD extended permit ip Net_100.200.65.0 255.255.255.0 object-group CRA_COD 

access-list KSPD extended permit ip host 100.200.0.78 Net_100.200.143.0 255.255.255.0 

access-list KSPD extended permit ip host 100.200.0.78 Net_100.200.130.0 255.255.255.0 

access-list KSPD extended permit ip Net_10.31.5.0 255.255.255.0 object-group CRA_and_TU 

access-list KSPD extended permit ip Net_100.200.105.0 255.255.255.0 object-group CRA_and_TU 

access-list KSPD extended permit ip Net_100.200.106.0 255.255.255.0 object-group CRA_and_TU 

access-list KSPD extended permit ip Net_100.200.104.0 255.255.255.0 object-group CRA_and_TU 

access-list KSPD extended permit ip 100.200.107.0 255.255.255.0 object-group CRA_COD 

access-list KSPD extended permit ip 100.200.107.0 255.255.255.0 host 100.200.141.45 

access-list KSPD extended permit ip Net_100.200.89.0 255.255.255.0 object-group CRA_and_TU 

access-list KSPD extended permit ip Net_100.200.72.0 255.255.252.0 object-group CRA 

access-list KSPD extended permit ip Net_100.200.67.0 255.255.255.0 object-group CRA_and_TU 

access-list KSPD extended permit ip 10.42.44.0 255.255.255.0 object-group CRA_COD 

access-list KSPD extended permit ip Net_10.42.0.0 255.255.0.0 object-group CRA_DC_AV 

access-list KSPD extended permit ip host Server_NTP_SSVG any 

access-list KSPD extended permit ip Net_198.18.18.0 255.255.255.0 Net_100.200.130.0 255.255.255.0 

access-list KSPD extended permit ip Net_100.200.28.0 255.255.255.0 host 100.200.130.215 

access-list KSPD extended permit ip Net_100.200.28.0 255.255.255.0 host 100.200.139.25 

access-list KSPD extended permit object-group Web_services Net_100.200.28.0 255.255.255.0 object-group iLO_COTUSS 

access-list KSPD extended permit ip object-group Tacacs_MMTEL Net_100.200.150.0 255.255.255.0 

access-list KSPD extended permit object-group TCPUDP Net_100.200.97.0 255.255.255.0 host 100.200.159.70 object-group Windows_share 

access-list KSPD extended permit ip host 10.31.1.96 host 100.200.150.100 

access-list KSPD extended permit ip host 10.31.1.96 Net_100.200.130.0 255.255.255.0 

access-list KSPD extended permit tcp host 10.31.70.32 object-group Citrix_servers eq sqlnet 

access-list KSPD extended permit tcp host SCS_GD host SCS eq sqlnet 

access-list KSPD extended permit tcp Net_100.200.7.0 255.255.255.0 host 100.200.150.160 eq sqlnet 

access-list KSPD extended permit object-group FTP_HTTP_SQL Net_10.35.0.0 255.255.0.0 object-group Net_130_servers 

access-list KSPD extended permit ip Net_10.0.0.0 255.224.0.0 host 100.200.141.100 

access-list KSPD extended permit ip Net_10.0.0.0 255.224.0.0 object-group CRA_COD 

access-list KSPD extended permit object-group FTP_HTTP_SQL Net_100.200.30.0 255.255.255.0 object-group Net_130_servers 

access-list KSPD extended permit object-group FTP_HTTP_SQL Net_10.22.0.0 255.255.0.0 object-group Net_130_servers 

access-list KSPD extended permit object-group FTP_HTTP_SQL Net_100.200.7.0 255.255.255.0 object-group Net_130_servers 

access-list KSPD extended permit ip 10.184.0.0 255.255.0.0 host ASR_BFN_Test_DB 

access-list KSPD extended permit ip Net_10.2.10.0 255.255.255.0 object-group CRA 

access-list KSPD extended permit object-group Citrix Net_192.168.111.0 255.255.255.0 object-group Citrix_servers 

access-list KSPD extended permit object-group Citrix Net_10.2.31.192 255.255.255.240 object-group Citrix_servers 

access-list KSPD extended permit object-group Citrix Net_192.168.1.0 255.255.255.0 object-group Citrix_servers 

access-list KSPD extended permit ip object-group ARM_Rubin Net_100.200.150.0 255.255.255.0 

access-list KSPD extended permit object-group Citrix object-group ARM_Rubin object-group Citrix_servers 

access-list KSPD extended permit object-group Citrix Net_100.200.7.0 255.255.255.0 object-group Citrix_servers 

access-list KSPD extended permit ip 100.200.0.0 255.255.252.0 object-group CRA_and_TU 

access-list KSPD extended permit ip Net_10.30.0.0 255.255.0.0 object-group CRA 

access-list KSPD extended permit ip Net_100.200.69.0 255.255.255.0 object-group CRA 

access-list KSPD extended permit object-group TCPUDP 100.200.32.0 255.255.255.0 host 100.200.130.230 object-group Oracle_OMS 

access-list KSPD extended permit tcp 100.200.32.0 255.255.255.0 object-group ESPP_Test object-group MS_SQL 

access-list KSPD extended permit tcp 100.200.32.0 255.255.255.0 object-group ESPP_Test object-group RDP 

access-list KSPD extended permit object-group Web_services 100.200.32.0 255.255.255.0 object-group ESPP_Test 

access-list KSPD extended permit ip 100.200.32.0 255.255.255.0 object-group COD_Billing_test 

access-list KSPD extended permit ip 100.200.192.0 255.255.240.0 object-group COD_Billing_test 

access-list KSPD extended permit tcp 100.200.182.0 255.255.255.0 object-group COD_Billing_test object-group RDP 

access-list KSPD extended permit tcp 100.200.182.0 255.255.255.0 object-group COD_Billing_test eq 5000 

access-list KSPD extended permit tcp host 100.200.182.91 host 100.200.130.1 eq sqlnet 

access-list KSPD extended permit tcp host 100.200.182.91 host 100.200.130.2 eq sqlnet 

access-list KSPD extended permit ip any host 100.200.141.9 

access-list KSPD extended permit ip host host_100.200.67.43 object-group COD_Billing_test 

access-list KSPD extended permit ip any host 100.200.150.199 

access-list KSPD extended permit ip any host 100.200.150.84 

access-list KSPD extended permit tcp any object-group CRA_COD eq www 

access-list KSPD extended permit tcp any object-group CRA_COD eq https 

access-list KSPD extended permit tcp any object-group CRA_COD eq telnet 

access-list KSPD extended permit tcp any object-group CRA_COD eq ssh 

access-list KSPD extended permit tcp any host SMT03TS064 object-group RDP 

access-list KSPD extended permit object-group FTP_HTTP_SQL any host Portal_CRA 

access-list KSPD extended permit tcp any object-group APK_Obzvon object-group MS_SQL 

access-list KSPD extended permit ip host 10.36.132.32 host 100.200.141.20 

access-list KSPD extended permit ip host 10.36.132.32 host 100.200.130.86 

access-list KSPD extended permit ip any host 100.200.130.215 

access-list KSPD extended permit ip any host 100.200.139.25 

access-list KSPD extended permit ip any host 100.200.139.20 

access-list KSPD extended permit ip any host 100.200.139.27 

access-list KSPD extended permit ip any host 100.200.130.121 

access-list KSPD extended permit ip any host 100.200.130.186 

access-list KSPD extended permit ip host 10.255.32.15 object-group CRA_DC_AV 

access-list KSPD extended permit ip host 10.34.8.36 object-group CRA_DC_AV 

access-list KSPD extended permit ip host 87.226.149.66 object-group CRA_DC_AV 

access-list KSPD extended permit ip Net_100.200.111.0 255.255.255.0 host 100.200.130.7 

access-list KSPD extended permit tcp host 10.56.7.142 host 100.200.141.20 eq ftp 

access-list KSPD extended permit tcp host 10.42.44.26 host 100.200.141.20 object-group DM_INLINE_TCP_1 

access-list KSPD extended permit tcp host 10.147.80.9 host 100.200.141.20 object-group DM_INLINE_TCP_3 

access-list KSPD extended permit tcp host 100.200.32.180 host 10.42.44.26 object-group DM_INLINE_TCP_2 

access-list KSPD extended permit tcp host 10.56.4.30 host 100.200.141.20 eq ftp log debugging 

access-list KSPD extended permit object-group NKS_to_ESXi_service object-group NKS_to_ESXi host 100.200.139.119 

access-list KSPD extended permit ip any object-group CRA_DC_AV 

access-list KSPD extended permit tcp host 100.200.32.64 host R15 eq 7803 

access-list KSPD extended permit tcp 100.200.0.0 255.255.0.0 host R15 gt 1024 

access-list KSPD extended permit ip 10.42.44.0 255.255.255.0 host R15 

access-list KSPD extended permit object-group FTP_HTTP_SQL host 10.50.51.14 host Oracle_CSS_Test_DB 

access-list KSPD extended permit tcp object-group Technograd_srv_from_net_10.50 host Oracle_CSS_Test_DB eq sqlnet 

access-list KSPD extended permit tcp host TechnoGrad_VPN host Oracle_CSS_Test_DB eq sqlnet 

access-list KSPD extended permit object-group NKS_VMWARE object-group NKS_VMWARE_PC Net_100.200.130.0 255.255.255.0 

access-list KSPD extended permit ip object-group Teterev_users_NKS Net_100.200.130.0 255.255.255.0 

access-list KSPD extended permit tcp host 100.200.181.210 host 100.200.130.3 eq sqlnet 

access-list KSPD remark From_NKS_to_SBMS

access-list KSPD extended permit tcp 100.200.181.0 255.255.255.0 host 100.200.130.84 eq 5000 

access-list KSPD extended permit tcp object-group SKYLINK_RM host 100.200.130.84 eq 5000 

access-list KSPD extended permit tcp host 100.200.32.64 host 100.200.130.84 eq 5000 

access-list KSPD extended permit object-group NKS_to_ESXi_service object-group NKS_to_ESXi host 100.200.139.211 

access-list KSPD extended permit tcp host 100.200.97.16 host 100.200.130.2 eq sqlnet 

access-list KSPD extended permit ip 10.22.12.0 255.255.255.224 object-group CRA_COD 

access-list KSPD extended permit tcp object-group Technograd_srv_from_net_10.50 object-group Techograd_servers object-group RDP 

access-list KSPD extended permit tcp any host AMT03VISE001 eq 8443 log 

access-list KSPD extended permit udp any host AMT03VISE001 object-group DM_INLINE_UDP_2 

access-list KSPD extended permit ip any host AMT03VISE001 log 

access-list KSPD extended permit tcp any gt 1024 host AMT03VISE001 eq 8443 log 

access-list KSPD extended permit udp any object-group DM_INLINE_UDP_1 host AMT03VISE001 

access-list KSPD extended permit tcp object-group DM_INLINE_NETWORK_1 object-group Techograd_servers object-group RDP 

access-list KSPD extended permit tcp object-group From_CPOK_Lite_MVNO host 100.200.130.50 eq sqlnet 

access-list KSPD extended permit tcp any host 100.200.150.30 eq tacacs 

access-list KSPD extended permit object-group General_Domain any any 

access-list KSPD extended permit udp any any object-group traceroute 

access-list KSPD extended permit object-group VPN any any 

access-list KSPD extended permit icmp any any 

access-list KSPD extended permit ip object-group ADMIN_LVS any 

access-list KSPD extended deny ip any any log 

access-list GD extended permit ip host 100.200.250.2 host 100.200.141.48 

access-list GD extended permit ip host 100.200.250.2 host 100.200.130.5 

access-list GD extended permit ip host 100.200.250.2 Net_100.200.150.0 255.255.255.0 

access-list GD extended permit object-group General_Domain any any 

access-list GD extended permit udp any any object-group traceroute 

access-list GD extended permit icmp any any 

access-list GD extended deny ip any any log 

access-list COD extended permit ip object-group CRA_and_TU Net_10.31.5.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU host PO_198.18.92.227 

access-list COD extended permit ip object-group CRA_and_TU Net_192.168.111.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU Net_192.168.1.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU Net_10.0.0.0 255.224.0.0 

access-list COD extended permit ip object-group CRA_and_TU Net_10.161.133.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU host 10.184.0.3 

access-list COD extended permit tcp object-group CRA Net_100.200.89.0 255.255.255.0 object-group RDP 

access-list COD extended permit ip object-group CRA_and_TU Net_100.200.67.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU Net_100.200.72.0 255.255.252.0 

access-list COD extended permit ip object-group CRA_and_TU Net_10.255.0.0 255.255.0.0 

access-list COD extended permit ip object-group CRA object-group ARM_Rubin 

access-list COD extended permit ip object-group CRA_and_TU 100.200.0.0 255.255.252.0 

access-list COD extended permit ip Net_100.100.100.0 255.255.255.0 host Server_NTP_SSVG 

access-list COD extended permit ip object-group CRA host Server_NTP_SSVG 

access-list COD extended permit ip object-group CRA_COD 10.42.44.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU Net_10.42.0.0 255.255.0.0 

access-list COD extended permit ip object-group CRA_and_TU Net_100.200.24.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU Net_100.200.106.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU Net_100.200.69.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU object-group PRINTER_NETWORKS 

access-list COD extended permit ip Net_100.200.130.0 255.255.255.0 host 100.200.0.78 

access-list COD extended permit ip object-group CRA_COD any 

access-list COD extended permit ip host 100.200.139.25 any 

access-list COD extended permit ip host AMT03VISE001 any 

access-list COD extended permit ip host 100.200.139.27 any 

access-list COD extended permit ip host 100.200.139.20 any 

access-list COD extended permit ip host 100.200.141.9 any 

access-list COD extended permit tcp host Oracle_CSS Net_10.131.5.0 255.255.255.0 eq sqlnet 

access-list COD extended permit object-group Access_from_COD object-group CRA_and_TU any 

access-list COD extended permit ip any host 10.255.32.15 

access-list COD extended permit ip object-group CRA_and_TU Net_87.226.149.64 255.255.255.192 

access-list COD extended permit ip Net_100.200.139.0 255.255.255.0 Net_192.168.50.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU Net_10.36.0.0 255.255.0.0 

access-list COD extended permit ip Net_100.200.143.0 255.255.255.0 Net_10.50.0.0 255.255.0.0 

access-list COD extended permit ip any host 10.34.8.36 

access-list COD extended permit ip Net_100.200.128.0 255.255.255.0 Net_100.200.159.0 255.255.255.0 

access-list COD extended permit ip Net_100.200.128.0 255.255.255.0 Net_100.200.160.0 255.255.255.0 

access-list COD extended permit object-group TCPUDP Net_100.200.139.0 255.255.255.0 host 100.200.29.29 eq tacacs 

access-list COD extended permit object-group TCPUDP Net_100.200.149.0 255.255.255.0 host 100.200.29.29 eq tacacs 

access-list COD remark access_to_X-tone_Ural_service_RBT

access-list COD extended permit tcp host 100.200.141.96 host 10.178.118.167 eq 10095 

access-list COD extended permit object-group General_Domain any any 

access-list COD extended permit udp any any object-group traceroute 

access-list COD extended permit object-group VPN any any 

access-list COD extended permit icmp any any 

access-list COD extended deny ip any any log 

access-list AMTC-AXE extended deny ip host 100.200.160.10 any 

access-list AMTC-AXE extended permit icmp Net_100.200.160.0 255.255.255.0 100.200.158.0 255.255.255.0 log 

access-list AMTC-AXE extended permit object-group Service_Converter_158.32 Net_100.200.159.0 255.255.255.0 100.200.158.32 255.255.255.224 

access-list AMTC-AXE extended permit ip Net_100.200.160.0 255.255.255.0 100.200.158.0 255.255.255.0 log 

access-list AMTC-AXE extended permit ip Net_100.200.160.0 255.255.255.0 any log disable 

access-list AMTC-AXE extended permit udp any any object-group traceroute 

access-list AMTC-AXE extended deny ip any any log disable 

access-list Converter extended permit ip 100.200.158.32 255.255.255.224 Net_100.200.159.0 255.255.255.0 

access-list Converter extended deny ip any any log 

access-list APM-AMTC-AXE extended permit icmp Net_100.200.159.0 255.255.255.0 100.200.158.0 255.255.255.0 log 

access-list APM-AMTC-AXE extended permit object-group Service_Converter_158.32 Net_100.200.159.0 255.255.255.0 100.200.158.32 255.255.255.224 

access-list APM-AMTC-AXE extended permit ip Net_100.200.159.0 255.255.255.0 100.200.158.0 255.255.255.0 log 

access-list APM-AMTC-AXE extended permit ip Net_100.200.159.0 255.255.255.0 any log disable 

access-list APM-AMTC-AXE extended permit udp any any object-group traceroute 

access-list APM-AMTC-AXE extended deny ip any any log disable 

access-list Mediation extended permit ip host 10.54.0.2 any 

access-list Mediation extended permit ip host 10.54.0.4 any 

access-list Mediation extended permit udp any any object-group traceroute 

access-list Mediation extended permit icmp any any 

access-list Mediation extended deny ip any any log 

access-list ACS_Replication extended deny ip host 100.200.29.29 host 100.200.150.30 

access-list ACS_Replication extended deny ip host 100.200.150.30 host 100.200.29.29 

access-list ACS_Replication extended permit tcp any any eq 2000 

access-list mail_study_center extended deny ip host smt03edu001.mt.rt.ru host 100.200.1.99 

access-list mail_study_center extended permit tcp any any eq smtp 

pager lines 24

logging enable

logging timestamp

logging buffer-size 8192

logging buffered debugging

logging trap informational

logging asdm informational

logging facility 22

logging host KSPD 192.168.50.3

logging host management 100.200.29.15

no logging message 418001

no logging message 710005

no logging message 400010

no logging message 400011

no logging message 400014

no logging message 400015

no logging message 302015

no logging message 302014

no logging message 302013

no logging message 302016

no logging message 302021

no logging message 302020

mtu KSPD 1500

mtu COD_141 1500

mtu GD_250 1500

mtu management 1500

mtu Mediation 1500

mtu toCRA_150 1500

mtu ARM-AMTC-AXE_159 1500

mtu AMTC-AXE_160 1500

mtu Converter_158 1500

ip verify reverse-path interface GD_250

ip audit name ATTACK attack action alarm

ip audit name INFO info action alarm

ip audit interface KSPD INFO

ip audit interface KSPD ATTACK

ip audit interface COD_141 INFO

ip audit interface COD_141 ATTACK

ip audit interface GD_250 INFO

ip audit interface GD_250 ATTACK

no failover

icmp unreachable rate-limit 10 burst-size 5

icmp permit any KSPD

icmp permit any Mediation

icmp permit any AMTC-AXE_160

asdm image disk0:/asdm-645-206.bin

asdm location Net_100.200.72.0 255.255.252.0 management

asdm location Net_10.2.31.192 255.255.255.240 management

asdm location Net_10.22.0.0 255.255.0.0 management

asdm location Test_srv_ASR_BFN 255.255.255.255 management

asdm location 10.31.70.32 255.255.255.255 management

asdm location Net_100.200.36.0 255.255.255.0 management

asdm location 10.184.0.0 255.255.0.0 management

asdm location 87.226.149.66 255.255.255.255 management

asdm location Net_87.226.149.64 255.255.255.192 management

asdm location Net_192.168.50.0 255.255.255.0 management

asdm location Net_10.255.0.0 255.255.0.0 management

asdm location Net_10.131.5.0 255.255.255.0 management

asdm location Net_10.161.133.0 255.255.255.0 management

asdm location 10.184.0.3 255.255.255.255 management

asdm location Net_10.36.0.0 255.255.0.0 management

asdm location 100.200.32.0 255.255.255.0 management

asdm location 10.61.0.0 255.255.0.0 management

asdm location 10.42.44.0 255.255.255.0 management

asdm location 100.200.203.0 255.255.255.0 management

asdm location 100.200.192.0 255.255.240.0 management

asdm location 100.200.130.73 255.255.255.255 management

asdm location 100.200.130.78 255.255.255.255 management

asdm location 100.200.130.79 255.255.255.255 management

asdm location 100.200.130.151 255.255.255.255 management

asdm location 100.200.130.152 255.255.255.255 management

asdm location host_100.200.67.43 255.255.255.255 management

asdm location 100.200.107.0 255.255.255.0 management

asdm location 100.200.5.0 255.255.255.0 management

asdm location 100.200.50.0 255.255.255.0 management

asdm location 100.200.141.45 255.255.255.255 management

asdm location 100.200.182.0 255.255.255.0 management

asdm location 10.56.7.142 255.255.255.255 management

asdm location Net_10.50.0.0 255.255.0.0 management

asdm location 10.54.0.4 255.255.255.255 management

asdm location 100.200.181.0 255.255.255.0 management

asdm location 100.200.182.91 255.255.255.255 management

asdm location 100.200.139.119 255.255.255.255 management

asdm location smt03edu001.mt.rt.ru 255.255.255.255 management

asdm location 10.50.51.14 255.255.255.255 management

asdm location 100.200.181.181 255.255.255.255 management

asdm location TechnoGrad_VPN 255.255.255.255 management

asdm location TechnoGrad41 255.255.255.255 management

asdm location TechnoGrad42 255.255.255.255 management

asdm location TechnoGrad43 255.255.255.255 management

asdm location TechnoGrad44 255.255.255.255 management

asdm location AMT03VISE001 255.255.255.255 management

asdm location TechnoGrad_VPN8 255.255.255.248 management

asdm location 100.200.158.0 255.255.255.240 management

no asdm history enable

arp timeout 14400

global (Mediation) 1 interface

static (Mediation,COD_141) 100.200.141.20 10.54.0.2 netmask 255.255.255.255 

static (Mediation,KSPD) 100.200.141.20 10.54.0.2 netmask 255.255.255.255 

static (Mediation,COD_141) 100.200.141.96 10.54.0.4 netmask 255.255.255.255 

static (Mediation,KSPD) 100.200.141.96 10.54.0.4 netmask 255.255.255.255 

access-group KSPD in interface KSPD

access-group COD in interface COD_141

access-group GD in interface GD_250

access-group Mediation in interface Mediation

access-group toCRA in interface toCRA_150

access-group APM-AMTC-AXE in interface ARM-AMTC-AXE_159

access-group AMTC-AXE in interface AMTC-AXE_160

access-group Converter in interface Converter_158

route KSPD 0.0.0.0 0.0.0.0 100.200.0.1 1

route KSPD 10.11.0.4 255.255.255.255 100.200.1.1 1

route KSPD 100.200.0.202 255.255.255.255 100.200.1.1 1

route KSPD Net_100.200.7.0 255.255.255.0 100.200.0.92 1

route KSPD 100.200.13.0 255.255.255.255 100.200.1.1 1

route KSPD Net_100.200.28.0 255.255.255.0 100.200.0.92 1

route management 100.200.29.0 255.255.255.0 100.200.29.2 1

route KSPD 100.200.29.29 255.255.255.255 100.200.0.1 1

route KSPD 100.200.29.199 255.255.255.255 100.200.0.1 1

route KSPD Server_NTP_SSVG 255.255.255.255 100.200.0.92 1

route KSPD Net_100.200.111.0 255.255.255.0 100.200.1.1 1

route COD_141 Net_100.200.128.0 255.255.255.0 100.200.141.254 1

route COD_141 Net_100.200.130.0 255.255.255.0 100.200.141.233 1

route COD_141 Net_100.200.139.0 255.255.255.0 100.200.141.233 1

route COD_141 100.200.141.0 255.255.255.0 100.200.141.254 1

route COD_141 Net_100.200.143.0 255.255.255.0 100.200.141.254 1

route COD_141 Net_100.200.149.0 255.255.255.0 100.200.141.254 1

route COD_141 Net_100.200.150.0 255.255.255.0 100.200.141.254 1

route COD_141 100.200.249.0 255.255.255.0 100.200.141.254 1

route Mediation 10.53.65.6 255.255.255.255 10.54.0.3 1

route COD_141 10.60.0.0 255.255.0.0 100.200.141.254 1

route COD_141 10.60.4.36 255.255.255.252 100.200.141.254 1

route Mediation 10.61.32.129 255.255.255.255 10.54.0.3 1

route COD_141 10.76.172.50 255.255.255.255 100.200.141.254 1

route COD_141 10.76.172.51 255.255.255.255 100.200.141.254 1

route COD_141 10.76.172.52 255.255.255.255 100.200.141.254 1

route COD_141 10.76.172.58 255.255.255.255 100.200.141.254 1

route Mediation 10.247.0.107 255.255.255.255 10.54.0.3 1

route Mediation 10.247.65.6 255.255.255.255 10.54.0.3 1

route Mediation 10.255.0.112 255.255.255.252 10.54.0.3 1

route KSPD Net_87.226.149.64 255.255.255.192 100.200.1.1 1

route COD_141 Net_100.100.100.0 255.255.255.0 100.200.141.254 1

route KSPD 172.19.0.0 255.255.255.0 ASA-1HotLine 1

route KSPD 172.20.0.0 255.255.255.0 ASA-1HotLine 1

route KSPD 172.28.230.0 255.255.255.0 100.200.1.1 1

route KSPD Net_192.168.1.0 255.255.255.0 100.200.1.1 1

route KSPD Net_192.168.50.0 255.255.255.0 100.200.1.1 1

route KSPD Net_192.168.111.0 255.255.255.0 100.200.1.1 1

route COD_141 192.168.125.0 255.255.255.0 100.200.141.254 1

route KSPD Net_198.18.18.0 255.255.255.0 100.200.1.1 1

route KSPD PO_198.18.92.227 255.255.255.255 ASA-1HotLine 1

route COD_141 220.208.79.0 255.255.255.0 100.200.141.254 1

timeout xlate 3:00:00

timeout conn 5:00:00 half-closed 0:10:00 udp 0:02:00 icmp 0:00:02

timeout sunrpc 0:10:00 h323 0:05:00 h225 1:00:00 mgcp 0:05:00 mgcp-pat 0:05:00

timeout sip 0:30:00 sip_media 0:02:00 sip-invite 0:03:00 sip-disconnect 0:02:00

timeout sip-provisional-media 0:02:00 uauth 0:05:00 absolute

timeout tcp-proxy-reassembly 0:01:00

timeout floating-conn 0:00:00

dynamic-access-policy-record DfltAccessPolicy

aaa-server TACACS+ protocol tacacs+

aaa-server TACACS+ (KSPD) host 192.168.50.25

 key [eqyz17:30

aaa-server TACACS+ (KSPD) host 192.168.50.26

 key [eqyz17:30

aaa authentication http console TACACS+ LOCAL

aaa authentication ssh console TACACS+ LOCAL

aaa authentication telnet console TACACS+ LOCAL

aaa authorization command LOCAL 

http server enable

http 100.200.29.0 255.255.255.0 management

http 100.200.111.254 255.255.255.255 KSPD

snmp-server host KSPD 100.200.0.190 community Ver2ake82access version 2c

snmp-server host KSPD Server_NNM poll community Ver2ake82access

snmp-server host KSPD Server_SMT34AV001 community Ver2ake82access

snmp-server host KSPD 100.200.1.254 community Ver2ake82accessn version 2c

no snmp-server location

no snmp-server contact

snmp-server community Ver2ake82access

snmp-server enable traps snmp authentication linkup linkdown coldstart

snmp-server enable traps syslog

snmp-server enable traps remote-access session-threshold-exceeded

no service resetoutbound interface AMTC-AXE_160

crypto ipsec security-association lifetime seconds 28800

crypto ipsec security-association lifetime kilobytes 4608000

telnet 100.200.29.0 255.255.255.0 management

telnet timeout 5

ssh 0.0.0.0 0.0.0.0 KSPD

ssh Pestryakov_PC 255.255.255.255 KSPD

ssh 100.200.111.254 255.255.255.255 KSPD

ssh 100.200.29.15 255.255.255.255 management

ssh 0.0.0.0 0.0.0.0 management

ssh timeout 20

ssh version 2

console timeout 0

dhcprelay timeout 60

threat-detection basic-threat

threat-detection statistics host

threat-detection statistics port

threat-detection statistics protocol

threat-detection statistics access-list

no threat-detection statistics tcp-intercept

ntp server Server_NTP_SSVG

ssl encryption 3des-sha1 des-sha1

webvpn

!

class-map dcerpc

 match port tcp eq 135

class-map SCCP_skinny

 match access-list ACS_Replication

class-map ESMTP

 match access-list mail_study_center

class-map inspection_default

 match default-inspection-traffic

!

!

policy-map type inspect dns preset_dns_map

 parameters

  message-length maximum 512

policy-map type inspect dcerpc dcerpc_map

 parameters

  endpoint-mapper lookup-operation timeout 0:05:00

  timeout pinhole 0:10:00

policy-map global_policy

 class SCCP_skinny

  inspect skinny  

 class ESMTP

  inspect esmtp 

 class inspection_default

  inspect dns preset_dns_map 

  inspect ftp 

  inspect h323 h225 

  inspect h323 ras 

  inspect icmp 

  inspect icmp error 

  inspect ip-options 

  inspect ipsec-pass-thru 

  inspect netbios 

  inspect rsh 

  inspect rtsp 

  inspect sip  

  inspect skinny  

  inspect sunrpc 

  inspect tftp 

  inspect xdmcp 

  inspect esmtp 

 class dcerpc

  inspect dcerpc dcerpc_map 

 class class-default

  set connection decrement-ttl

!

service-policy global_policy global

prompt hostname context 

no call-home reporting anonymous

call-home

 profile CiscoTAC-1

  no active

  destination address http https://tools.cisco.com/its/service/oddce/services/DDCEService

  destination address email callhome@cisco.com

  destination transport-method http

  subscribe-to-alert-group diagnostic

  subscribe-to-alert-group environment

  subscribe-to-alert-group inventory periodic monthly

  subscribe-to-alert-group configuration periodic monthly

  subscribe-to-alert-group telemetry periodic daily

Cryptochecksum:d82c6e2222576cc11df58e70493767b0
`;

  // Новая версия файла с изменениями
  const newCode = `Cryptochecksum: d82c6e22 22576cc1 1df58e70 493767b0 

!

ASA Version 8.2(5)13 

!

hostname CheckPoint

domain-name xz.ru

enable password f0k3P1NlXHYkRqbn encrypted

passwd f0k3P1NlXHYkRqbn encrypted

names

name 100.200.139.0 Net_100.200.139.0 description Management_Net_M3

name 100.200.143.0 Net_100.200.143.0 description CRA_Pretenzii

name 100.200.149.0 Net_100.200.149.0 description Management_Net_M7

name 100.200.150.0 Net_100.200.150.0 description CRA_Net_M7

name 10.31.5.0 Net_10.31.5.0 description COD_GD

name 100.200.130.0 Net_100.200.130.0 description CRA_Net_M3

name 100.200.104.0 Net_100.200.104.0 description Printers_M3

name 100.200.106.0 Net_100.200.106.0 description Net_for_GD_Bryanskaya

name 100.200.24.0 Net_100.200.24.0 description CRA_Bryanskaya

name 100.200.64.0 Net_100.200.64.0 description Printer_M5

name 100.200.69.0 Net_100.200.69.0 description Net_Goncharnaya_stage_3

name 100.200.80.0 Net_100.200.80.0 description Printer_M7

name 100.200.88.0 Net_100.200.88.0 description Printer_M34

name 100.200.96.0 Net_100.200.96.0 description Printer_M10

name 10.30.0.0 Net_10.30.0.0 description GD

name 100.200.128.0 Net_100.200.128.0 description EWSD

name 100.200.159.0 Net_100.200.159.0 description ARM_AMTS_AXE

name 100.200.160.0 Net_100.200.160.0 description AMTS_AXE

name 10.0.16.0 Net_10.0.16.0 description GD

name 10.42.0.0 Net_10.42.0.0 description Centr

name 100.200.4.0 Net_100.200.4.0

name 100.100.100.0 Net_100.100.100.0

name 10.2.10.0 Net_10.2.10.0 description GD

name 100.200.67.0 Net_100.200.67.0 description UIT_M5

name 100.200.89.0 Net_100.200.89.0 description Users_M34

name 10.0.0.0 Net_10.0.0.0

name 192.168.1.0 Net_192.168.1.0 description MCNTT_COV

name 192.168.111.0 Net_192.168.111.0 description Kostroma_MCNTT

name 198.18.92.227 PO_198.18.92.227

name 100.200.141.46 NTP_M3_100.200.141.46

name 100.200.0.45 loginov

name 100.200.7.0 Net_100.200.7.0 description LVS_PKP

name 100.200.141.50 smt03ts50 description Citrix

name 100.200.141.51 smt03ts51 description Citrix

name 100.200.141.52 smt03ts52 description Citrix

name 100.200.30.0 Net_100.200.30.0 description RUBIN

name 10.35.0.0 Net_10.35.0.0 description Bekasovo

name 100.200.97.0 Net_100.200.97.0 description Users_M10

name 100.200.28.0 Net_100.200.28.0

name 100.200.105.0 Net_100.200.105.0 description Users_M3

name 100.200.65.0 Net_100.200.65.0 description Users_M5

name 100.200.130.64 SMT03TS064

name 100.200.72.0 Net_100.200.72.0

name 10.2.31.192 Net_10.2.31.192 description Kostroma_MCNTT_S-Terra_GD

name 100.200.150.10 R15 description MetaFrame(Express_schet)

name 10.22.0.0 Net_10.22.0.0 description Moskovsky_filial

name 100.200.130.203 LK

name 100.200.130.204 LK1

name 100.200.130.200 Oracle_CSS

name 100.200.130.220 SMT03FS008 description CRA_Distr

name 100.200.130.206 ASR_BFN_Test_DB

name 100.200.130.201 Oracle_CSS_Test_DB

name 100.200.130.205 Test_srv_ASR_BFN

name 100.200.130.209 SCS

name 10.31.54.2 SCS_GD

name 100.200.36.0 Net_100.200.36.0 description Skylink

name 100.200.141.40 Portal_CRA

name 10.131.5.0 Net_10.131.5.0

name 10.161.133.0 Net_10.161.133.0 description Net_for_monitoring_backup_SRV_in_ERCOV

name 10.255.0.0 Net_10.255.0.0 description MRF_Center

name 100.200.111.0 Net_100.200.111.0

name 192.168.50.0 Net_192.168.50.0 description DMZ

name 198.18.18.0 Net_198.18.18.0

name 87.226.149.64 Net_87.226.149.64

name 10.36.0.0 Net_10.36.0.0

name 100.200.2.187 MushtaovaNA_PC2

name 100.200.2.204 PostnikovaLB_PC

name 91.151.207.40 TELECOM_DESIGN_host1

name 84.204.42.162 TELECOM_DESIGN_host2

name 10.0.24.40 Server_Lotus_NEW_MMT0

name 10.0.24.41 Server_Lotus_NEW_MMT1

name 10.30.1.52 sks01ap005

name 10.30.1.70 Server_PORTAL_GD

name 10.31.3.55 Server_MOSASO

name 10.31.130.29 Server_ISS_RISS

name 100.200.0.5 Semenov_PC

name 100.200.0.20 Vinogradov_PC

name 100.200.0.30 Server_NNM

name 100.200.0.40 Simonin_PC

name 100.200.0.44 Stepin_PC

name 100.200.0.57 Belov_PC

name 100.200.0.76 Nikiforov_PC

name 100.200.0.86 GolunovDK_PC

name 100.200.0.90 Glukhov_PC

name 100.200.0.109 Server_HELPDESK
name 100.200.3.213 Server_PORTAL_MMT

name 100.200.3.216 km-3050_m34k226
name 100.200.3.213 Server_PORTAL_MMT

name 100.200.3.216 km-3050_m34k226
name 100.200.3.213 Server_PORTAL_MMT

name 100.200.3.216 km-3050_m34k226
name 100.200.3.213 Server_PORTAL_MMT

name 100.200.3.216 km-3050_m34k226
name 100.200.3.213 Server_PORTAL_MMT

name 100.200.3.216 km-3050_m34k226

name 100.200.0.111 Server_SMT05SQ203

name 100.200.0.183 IvanenkoKB

name 100.200.0.229 Bruhanov_PC

name 100.200.1.30 Belyaev_PC

name 100.200.1.39 Server_SMT05SUS

name 100.200.1.42 Server_DC1

name 100.200.1.43 Server_FIN

name 100.200.1.48 Server_LOTUS_main

name 100.200.1.49 Server_LOTUS_m34

name 100.200.1.59 Server_Omega

name 100.200.1.122 JuravlevaEA_PC

name 100.200.1.173 HadikovaOM_PC

name 100.200.1.240 Glukhov_PC2

name 100.200.1.252 KoroteevVA_PC

name 100.200.2.55 KulikovaTV_PC

name 100.200.2.128 Server_SMT05BC003

name 100.200.2.155 BolshakovBN_PC2

name 100.200.3.4 Server_SMT05EX001

name 100.200.3.5 Server_SMT05FS001

name 100.200.3.16 Server_SMT05AV001

name 100.200.3.18 Server_SMT05DC001

name 100.200.3.22 Server_SMT05BC001

name 100.200.3.36 Server_SMT34EX001

name 100.200.3.41 Server_SMT34FS001

name 100.200.3.44 Server_SMT34AV001

name 100.200.3.45 Server_SMT34DC001

name 100.200.3.51 Server_BOSS

name 100.200.2.82 RozhinaON_PC

name 100.200.2.86 BologovaLV_PC

name 100.200.2.88 RyabovaVV_PC

name 100.200.2.162 Smena_OSP_PC

name 100.200.2.190 LomovskayaES_PC

name 100.200.3.167 Server_SMT05LT001

name 100.200.3.168 Server_SMT05LT002

name 100.200.3.213 Server_PORTAL_MMT

name 100.200.3.216 km-3050_m34k226

name 100.200.3.236 printer_km3050_m5_441

name 100.200.3.237 printer_km3050_gonch_26_1418

name 100.200.6.206 Server_ELENA

name 100.200.29.50 Server_SMT05PCM

name 100.200.31.4 Server_NTP_SSVG

name 100.200.130.31 CRA_KozyrevOV_PC

name 100.200.130.39 CRA_TeterevOV_PC

name 100.200.130.109 CRA_LikharevYV_PC

name 100.200.130.110 CRA_Kozubets_Kamenev_PC

name 100.200.130.113 CRA_Sergeev_Pischikov

name 100.200.130.120 CRA_FilatovVA_PC

name 100.200.130.196 CRA_Monitor_1

name 100.200.150.126 CRA_LisovskiyVV_PC

name 100.200.150.135 CRA_RomanovMN_PC

name 100.200.0.100 Smena_CIT

name 100.200.0.103 Smena_CIT1

name 100.200.1.100 Smena_CIT2

name 100.200.0.10 Cluster_for_VVP

name 100.200.0.89 MoskalenkoEV

name 87.226.149.74 vn.mmtel.ru

name 100.200.1.63 Belyaev_Asterix

name 100.200.1.50 ASA-1HotLine

name 100.200.2.50 ASA-2HotLine

name 192.168.50.40 Server_RADIUS_SkyLink

name 100.200.0.107 Bruhanov_PC3

name 195.28.32.3 mail.ntt.ru

name 100.200.1.176 Avtaeva_PC

name 100.200.1.157 Terenteva_PC

name 100.200.3.154 Medvedkina_PC

name 100.200.2.219 Trifonova_PC

name 194.197.79.18 TELECOM_DESIGN_host3

name 100.200.69.99 MushtaovaNA_PC3

name 193.33.122.61 Svyaz_BANK_online

name 100.200.0.42 PC_INET_r1004_Vibory1

name 100.200.0.43 PC_INET_r1004_Vibory2

name 100.200.0.49 PC_INET_r1004_Vibory3

name 100.200.0.59 PC_INET_r1004_Vibory4

name 100.200.0.62 PC_INET_r1004_Vibory5

name 100.200.0.65 PC_INET_r1004_Vibory6

name 100.200.0.71 PC_INET_r1004_Vibory7

name 100.200.2.22 PC_INET_r1008_Vib1

name 100.200.2.61 PC_INET_r1008_Vib2

name 100.200.2.96 PC_INET_r1008_Vib3

name 100.200.1.54 PC_INET_r907_Vib1

name 212.176.15.63 Promsvyazbank

name 193.200.10.10 Promsvyazbank_new

name 100.200.67.43 host_100.200.67.43

name 10.50.0.0 Net_10.50.0.0 description MSK_branch

name 100.200.130.92 smt03edu001.mt.rt.ru

name 100.200.130.111 smt03eip006

name 100.200.130.41 TechnoGrad41

name 100.200.130.42 TechnoGrad42

name 100.200.130.43 TechnoGrad43

name 100.200.130.44 TechnoGrad44

name 100.200.111.253 TechnoGrad_VPN description Host_TechnoGrad_VPN

name 100.200.139.29 AMT03VISE001 description ISE Server

name 100.200.111.240 TechnoGrad_VPN8 description Pool_for_VPN_TechnoGrad

name 100.200.32.188 srv_aaa_skylink

name 100.200.32.189 srv_aaa_skylink_2

name 100.200.2.41 Paligin_PC

!

interface GigabitEthernet0/0

 no nameif

 no security-level

 no ip address

!

interface GigabitEthernet0/0.5

 shutdown

 vlan 5

 nameif toCRA_150

 security-level 23

 ip address 100.200.150.1 255.255.255.0 

!

interface GigabitEthernet0/0.105

 vlan 105

 nameif KSPD

 security-level 0

 ip address 100.200.1.2 255.255.252.0 

!

interface GigabitEthernet0/0.158

 description Converter_M7

 vlan 158

 nameif Converter_158

 security-level 25

 ip address 100.200.158.33 255.255.255.224 

!

interface GigabitEthernet0/0.159

 description APM-AMTC-AXE

 vlan 159

 nameif ARM-AMTC-AXE_159

 security-level 22

 ip address 100.200.159.1 255.255.255.0 

!

interface GigabitEthernet0/0.160

 description AMTC-AXE

 vlan 160

 nameif AMTC-AXE_160

 security-level 21

 ip address 100.200.160.254 255.255.255.0 

!

interface GigabitEthernet0/0.703

 vlan 703

 nameif Mediation

 security-level 0

 ip address 10.54.0.1 255.255.255.248 

!

interface GigabitEthernet0/1

 no nameif

 no security-level

 no ip address

!

interface GigabitEthernet0/2

 no nameif

 no security-level

 no ip address

!

interface GigabitEthernet0/3

 shutdown

 no nameif

 no security-level

 no ip address

!

interface Management0/0

 nameif management

 security-level 100

 ip address 100.200.29.53 255.255.255.0 

 management-only

!

interface GigabitEthernet1/0

 no nameif

 no security-level

 no ip address

!

interface GigabitEthernet1/0.605

 vlan 605

 nameif COD_141

 security-level 100

 ip address 100.200.141.1 255.255.255.0 

!

interface GigabitEthernet1/1

 no nameif

 no security-level

 no ip address

!

interface GigabitEthernet1/1.500

 vlan 500

 nameif GD_250

 security-level 50

 ip address 100.200.250.1 255.255.255.252 

!

interface GigabitEthernet1/2

 shutdown

 no nameif

 no security-level

 no ip address

!

interface GigabitEthernet1/3

 shutdown

 no nameif

 no security-level

 no ip address

!

banner motd *********************************

banner motd Hello!!!

banner motd 

banner motd This is the Firewall for COD Filial Stolichnii

banner motd 

banner motd Go away!!!

banner motd *********************************

boot system disk0:/asa825-13-k8.bin

ftp mode passive

clock timezone MSK 4

dns server-group DefaultDNS

 domain-name mt.rt.ru

same-security-traffic permit inter-interface

same-security-traffic permit intra-interface

object-group service traceroute udp

 port-object range 33434 33524

object-group service RDP tcp

 port-object eq 3389

object-group network CRA

 description CRA_Networks

 network-object Net_100.200.130.0 255.255.255.0

 network-object Net_100.200.139.0 255.255.255.0

 network-object 100.200.141.0 255.255.255.0

 network-object Net_100.200.143.0 255.255.255.0

 network-object Net_100.200.149.0 255.255.255.0

 network-object Net_100.200.150.0 255.255.255.0

object-group service General_Domain

 service-object tcp eq 995 

 service-object tcp eq netbios-ssn 

 service-object udp eq netbios-dgm 

 service-object udp eq netbios-ns 

 service-object tcp-udp eq 135 

object-group network APK_Obzvon

 network-object host 100.200.150.69

 network-object host 100.200.150.70

object-group service MS_SQL tcp

 port-object eq 1433

 port-object eq 1434

 port-object eq sqlnet

object-group network CRA_COD

 network-object Net_100.200.130.0 255.255.255.0

 network-object Net_100.200.150.0 255.255.255.0

object-group network PRINTER_NETWORKS

 network-object Net_100.200.104.0 255.255.255.0

 network-object Net_100.200.64.0 255.255.255.0

 network-object Net_100.200.80.0 255.255.255.0

 network-object Net_100.200.88.0 255.255.255.0

 network-object Net_100.200.96.0 255.255.255.0

object-group network CRA_TU

 network-object Net_100.200.128.0 255.255.255.0

 network-object Net_100.200.159.0 255.255.255.0

 network-object Net_100.200.160.0 255.255.255.0

object-group network CRA_and_TU

 group-object CRA

 group-object CRA_TU

object-group service Web_services

 service-object tcp eq 7789 

 service-object tcp eq 8080 

 service-object tcp eq 8443 

 service-object tcp eq www 

 service-object tcp eq https 

object-group network ARM_Rubin

 network-object host 100.200.30.44

 network-object host 100.200.30.52

 network-object host 100.200.30.7

 network-object host 100.200.30.8

 network-object host 100.200.30.31

 network-object host 100.200.30.83

 network-object host 100.200.30.84

 network-object host 100.200.30.93

object-group network CIT_Admins

 network-object host loginov

object-group service Citrix

 service-object tcp eq 2598 

 service-object tcp eq citrix-ica 

 service-object tcp eq www 

 service-object udp eq 1604 

object-group network Citrix_servers

 network-object host smt03ts50

 network-object host smt03ts51

 network-object host smt03ts52

 network-object host 100.200.141.90

object-group service FTP_HTTP_SQL

 service-object tcp eq 8085 

 service-object tcp eq 8443 

 service-object tcp eq ftp 

 service-object tcp eq ftp-data 

 service-object tcp eq www 

 service-object tcp eq sqlnet 

object-group network Net_130_servers

 network-object host Oracle_CSS

 network-object host LK

 network-object host LK1

 network-object host SMT03FS008

 network-object host 100.200.130.50

 network-object host Oracle_CSS_Test_DB

 network-object host ASR_BFN_Test_DB

 network-object host Test_srv_ASR_BFN

object-group service Windows_share tcp-udp

 port-object eq 445

object-group protocol TCPUDP

 protocol-object udp

 protocol-object tcp

object-group network Tacacs_MMTEL

 network-object host 192.168.50.25

 network-object host 192.168.50.26

object-group network CRA_Management

 network-object Net_100.200.139.0 255.255.255.0

 network-object Net_100.200.149.0 255.255.255.0

object-group network CRA_DC_AV

 network-object host 100.200.130.15

 network-object host 100.200.141.100

 network-object host 100.200.150.129

 network-object host 100.200.150.130

object-group service VPN

 description for_VPN

 service-object gre 

 service-object esp 

object-group service Access_from_COD

 description To_any

 service-object tcp eq 1526 

 service-object tcp eq 3389 

 service-object tcp eq 7777 

 service-object tcp eq 8080 

 service-object tcp eq www 

 service-object tcp eq sqlnet 

 service-object tcp eq ssh 

 service-object tcp eq telnet 

 service-object udp eq 259 

 service-object tcp eq ftp 

 service-object tcp eq ftp-data 

 service-object tcp eq https 

object-group network iLO_COTUSS

 network-object host 100.200.149.35

 network-object host 100.200.149.90

 network-object host 100.200.149.91

 network-object host 100.200.149.92

object-group network ESPP_Test

 description Integrated_billing_Skylink_NKS_RT

 network-object host 100.200.130.51

 network-object host 100.200.130.52

 network-object host 100.200.130.53

 network-object host 100.200.130.1

 network-object host 100.200.130.151

 network-object host 100.200.130.152

 network-object host 100.200.130.153

 network-object host 100.200.130.154

 network-object host 100.200.130.155

 network-object host 100.200.130.156

 network-object host 100.200.130.157

 network-object host 100.200.130.158

 network-object host 100.200.130.159

object-group network COD_Billing_test

 description access_from_Skylink_to_COD_Billing_Test

 network-object host 100.200.130.57

 network-object host 100.200.130.60

 network-object host 100.200.130.65

 network-object host 100.200.130.67

 network-object host 100.200.130.68

 network-object host 100.200.130.69

 network-object host 100.200.130.70

 network-object host 100.200.130.71

 network-object host 100.200.130.1

 network-object host 100.200.130.72

 network-object host 100.200.130.73

 network-object host 100.200.130.78

 network-object host 100.200.130.79

 network-object host 100.200.130.52

 network-object host 100.200.130.151

 network-object host 100.200.130.152

 network-object host 100.200.130.156

 network-object host 100.200.130.157

 network-object host 100.200.130.158

 network-object host 100.200.130.159

 network-object host 100.200.130.51

 network-object host 100.200.130.53

 network-object host 100.200.130.84

object-group service Oracle_OMS tcp-udp

 port-object eq 1159

object-group network COV

 network-object Net_100.200.4.0 255.255.255.0

 network-object 100.200.5.0 255.255.255.0

 network-object 100.200.50.0 255.255.255.0

object-group service NKS_to_ESXi_service

 service-object tcp eq www 

 service-object tcp eq https 

 service-object tcp eq ssh 

 service-object tcp eq 902 

 service-object tcp eq 903 

object-group network NKS_to_ESXi

 network-object host 100.200.181.195

 network-object host 100.200.181.196

 network-object host 100.200.181.36

 network-object host 100.200.32.64

 network-object host 100.200.181.181

 network-object host 100.200.181.189

object-group service NKS_VMWARE

 service-object tcp eq 1414 

 service-object tcp eq 4414 

 service-object tcp eq 7080 

object-group network NKS_VMWARE_PC

 network-object host 100.200.181.181

 network-object host 100.200.181.36

object-group network Teterev_users_NKS

 network-object host 100.200.181.181

 network-object host 100.200.181.36

 network-object host 100.200.181.196

 network-object host 100.200.181.195

 network-object host 100.200.181.210

object-group network ADMIN_LVS

 description OSA

network-object host 100.200.203.95

object-group network SKYLINK_RM

 network-object host 100.200.203.95

 network-object host 100.200.203.96

object-group network Techograd_servers

 network-object host TechnoGrad41

 network-object host TechnoGrad42

 network-object host TechnoGrad43

 network-object host TechnoGrad44

object-group network Technograd_srv_from_net_10.50

 network-object host 10.50.44.1

 network-object host 10.50.44.2

 network-object host 10.50.44.5

 network-object host 10.50.44.6

 network-object host 10.50.47.110

 network-object host 10.50.47.40

 network-object host 10.50.65.18

 network-object host 10.50.67.27

 network-object Net_100.200.105.0 255.255.255.0

object-group service DM_INLINE_UDP_1 udp

 port-object eq radius

 port-object eq radius-acct

object-group service DM_INLINE_UDP_2 udp

 port-object eq radius

 port-object eq radius-acct

object-group network DM_INLINE_NETWORK_1

 network-object TechnoGrad_VPN8 255.255.255.248

 network-object host TechnoGrad_VPN

object-group service Service_Converter_158.32

 service-object tcp eq 2004 

 service-object tcp eq 4004 

 service-object tcp eq telnet 

 service-object udp eq netbios-ns 

object-group network From_CPOK_Lite_MVNO

 network-object host 100.200.7.131

 network-object host 100.200.7.132

 network-object host 100.200.7.143

 network-object host 100.200.7.174

 network-object host 100.200.7.175

 network-object host 100.200.7.212

 network-object host 100.200.7.21

 network-object host 100.200.7.22

object-group network SRV_AAA_Skylink_Borisov

 network-object host srv_aaa_skylink

 network-object host srv_aaa_skylink_2

object-group service DM_INLINE_TCP_1 tcp

 port-object eq ftp

 port-object eq ftp-data

object-group service DM_INLINE_TCP_2 tcp

 port-object eq ftp

 port-object eq ftp-data
 http 100.200.111.254 255.255.255.255 KSPD
 http 100.200.111.254 255.255.255.255 KSPD
 http 100.200.111.254 255.255.255.255 KSPD

object-group service DM_INLINE_TCP_3 tcp

 port-object eq ftp

 port-object eq ftp-data

access-list toCRA extended permit ip any any log debugging 

access-list toCRA extended permit icmp any any 

access-list KSPD extended permit icmp 100.200.0.0 255.255.0.0 100.200.158.32 255.255.255.224 log 

access-list KSPD extended permit ip 100.200.0.0 255.255.0.0 100.200.158.32 255.255.255.224 log 

access-list KSPD remark access_from_Ural_10.61_10.255

access-list KSPD extended permit tcp any host 100.200.141.77 eq 8443 log 

access-list KSPD extended permit ip host 100.200.29.29 host 100.200.150.30 

access-list KSPD extended permit ip host 100.200.29.29 host 100.200.150.31 

access-list KSPD extended permit ip Net_10.50.0.0 255.255.0.0 host smt03edu001.mt.rt.ru 

access-list KSPD extended permit ip object-group COV object-group CRA_and_TU 

access-list KSPD extended permit ip any host 100.200.130.81 log 

access-list KSPD extended permit ip Net_100.200.65.0 255.255.255.0 object-group CRA_COD 

access-list KSPD extended permit ip host 100.200.0.78 Net_100.200.143.0 255.255.255.0 

access-list KSPD extended permit ip host 100.200.0.78 Net_100.200.130.0 255.255.255.0 

access-list KSPD extended permit ip Net_10.31.5.0 255.255.255.0 object-group CRA_and_TU 

access-list KSPD extended permit ip Net_100.200.105.0 255.255.255.0 object-group CRA_and_TU 

access-list KSPD extended permit ip Net_100.200.106.0 255.255.255.0 object-group CRA_and_TU 

access-list KSPD extended permit ip Net_100.200.104.0 255.255.255.0 object-group CRA_and_TU 

access-list KSPD extended permit ip 100.200.107.0 255.255.255.0 object-group CRA_COD 

access-list KSPD extended permit ip 100.200.107.0 255.255.255.0 host 100.200.141.45 

access-list KSPD extended permit ip Net_100.200.89.0 255.255.255.0 object-group CRA_and_TU 

access-list KSPD extended permit ip Net_100.200.72.0 255.255.252.0 object-group CRA 

access-list KSPD extended permit ip Net_100.200.67.0 255.255.255.0 object-group CRA_and_TU 

access-list KSPD extended permit ip 10.42.44.0 255.255.255.0 object-group CRA_COD 

access-list KSPD extended permit ip Net_10.42.0.0 255.255.0.0 object-group CRA_DC_AV 

access-list KSPD extended permit ip host Server_NTP_SSVG any 

access-list KSPD extended permit ip Net_198.18.18.0 255.255.255.0 Net_100.200.130.0 255.255.255.0 

access-list KSPD extended permit ip Net_100.200.28.0 255.255.255.0 host 100.200.130.215 

access-list KSPD extended permit ip Net_100.200.28.0 255.255.255.0 host 100.200.139.25 

access-list KSPD extended permit object-group Web_services Net_100.200.28.0 255.255.255.0 object-group iLO_COTUSS 

access-list KSPD extended permit ip object-group Tacacs_MMTEL Net_100.200.150.0 255.255.255.0 

access-list KSPD extended permit object-group TCPUDP Net_100.200.97.0 255.255.255.0 host 100.200.159.70 object-group Windows_share 

access-list KSPD extended permit ip host 10.31.1.96 host 100.200.150.100 

access-list KSPD extended permit ip host 10.31.1.96 Net_100.200.130.0 255.255.255.0 

access-list KSPD extended permit tcp host 10.31.70.32 object-group Citrix_servers eq sqlnet 

access-list KSPD extended permit tcp host SCS_GD host SCS eq sqlnet 

access-list KSPD extended permit tcp Net_100.200.7.0 255.255.255.0 host 100.200.150.160 eq sqlnet 

access-list KSPD extended permit object-group FTP_HTTP_SQL Net_10.35.0.0 255.255.0.0 object-group Net_130_servers 

access-list KSPD extended permit ip Net_10.0.0.0 255.224.0.0 host 100.200.141.100 

access-list KSPD extended permit ip Net_10.0.0.0 255.224.0.0 object-group CRA_COD 

access-list KSPD extended permit object-group FTP_HTTP_SQL Net_100.200.30.0 255.255.255.0 object-group Net_130_servers 

access-list KSPD extended permit object-group FTP_HTTP_SQL Net_10.22.0.0 255.255.0.0 object-group Net_130_servers 

access-list KSPD extended permit object-group FTP_HTTP_SQL Net_100.200.7.0 255.255.255.0 object-group Net_130_servers 

access-list KSPD extended permit ip 10.184.0.0 255.255.0.0 host ASR_BFN_Test_DB 

access-list KSPD extended permit ip Net_10.2.10.0 255.255.255.0 object-group CRA 

access-list KSPD extended permit object-group Citrix Net_192.168.111.0 255.255.255.0 object-group Citrix_servers 

access-list KSPD extended permit object-group Citrix Net_10.2.31.192 255.255.255.240 object-group Citrix_servers 

access-list KSPD extended permit object-group Citrix Net_192.168.1.0 255.255.255.0 object-group Citrix_servers 

access-list KSPD extended permit ip object-group ARM_Rubin Net_100.200.150.0 255.255.255.0 

access-list KSPD extended permit object-group Citrix object-group ARM_Rubin object-group Citrix_servers 

access-list KSPD extended permit object-group Citrix Net_100.200.7.0 255.255.255.0 object-group Citrix_servers 

access-list KSPD extended permit ip 100.200.0.0 255.255.252.0 object-group CRA_and_TU 

access-list KSPD extended permit ip Net_10.30.0.0 255.255.0.0 object-group CRA 

access-list KSPD extended permit ip Net_100.200.69.0 255.255.255.0 object-group CRA 

access-list KSPD extended permit object-group TCPUDP 100.200.32.0 255.255.255.0 host 100.200.130.230 object-group Oracle_OMS 

access-list KSPD extended permit tcp 100.200.32.0 255.255.255.0 object-group ESPP_Test object-group MS_SQL 

access-list KSPD extended permit tcp 100.200.32.0 255.255.255.0 object-group ESPP_Test object-group RDP 

access-list KSPD extended permit object-group Web_services 100.200.32.0 255.255.255.0 object-group ESPP_Test 

access-list KSPD extended permit ip 100.200.32.0 255.255.255.0 object-group COD_Billing_test 

access-list KSPD extended permit ip 100.200.192.0 255.255.240.0 object-group COD_Billing_test 

access-list KSPD extended permit tcp 100.200.182.0 255.255.255.0 object-group COD_Billing_test object-group RDP 

access-list KSPD extended permit tcp 100.200.182.0 255.255.255.0 object-group COD_Billing_test eq 5000 

access-list KSPD extended permit tcp host 100.200.182.91 host 100.200.130.1 eq sqlnet 

access-list KSPD extended permit tcp host 100.200.182.91 host 100.200.130.2 eq sqlnet 

access-list KSPD extended permit ip any host 100.200.141.9 

access-list KSPD extended permit ip host host_100.200.67.43 object-group COD_Billing_test 

access-list KSPD extended permit ip any host 100.200.150.199 

access-list KSPD extended permit ip any host 100.200.150.84 

access-list KSPD extended permit tcp any object-group CRA_COD eq www 

access-list KSPD extended permit tcp any object-group CRA_COD eq https 

access-list KSPD extended permit tcp any object-group CRA_COD eq telnet 

access-list KSPD extended permit tcp any object-group CRA_COD eq ssh 

access-list KSPD extended permit tcp any host SMT03TS064 object-group RDP 

access-list KSPD extended permit object-group FTP_HTTP_SQL any host Portal_CRA 

access-list KSPD extended permit tcp any object-group APK_Obzvon object-group MS_SQL 

access-list KSPD extended permit ip host 10.36.132.32 host 100.200.141.20 

access-list KSPD extended permit ip host 10.36.132.32 host 100.200.130.86 

access-list KSPD extended permit ip any host 100.200.130.215 

access-list KSPD extended permit ip any host 100.200.139.25 

access-list KSPD extended permit ip any host 100.200.139.20 

access-list KSPD extended permit ip any host 100.200.139.27 

access-list KSPD extended permit ip any host 100.200.130.121 

access-list KSPD extended permit ip any host 100.200.130.186 

access-list KSPD extended permit ip host 10.255.32.15 object-group CRA_DC_AV 

access-list KSPD extended permit ip host 10.34.8.36 object-group CRA_DC_AV 

access-list KSPD extended permit ip host 87.226.149.66 object-group CRA_DC_AV 

access-list KSPD extended permit ip Net_100.200.111.0 255.255.255.0 host 100.200.130.7 

access-list KSPD extended permit tcp host 10.56.7.142 host 100.200.141.20 eq ftp 

access-list KSPD extended permit tcp host 10.42.44.26 host 100.200.141.20 object-group DM_INLINE_TCP_1 

access-list KSPD extended permit tcp host 10.147.80.9 host 100.200.141.20 object-group DM_INLINE_TCP_3 

access-list KSPD extended permit tcp host 100.200.32.180 host 10.42.44.26 object-group DM_INLINE_TCP_2 

access-list KSPD extended permit tcp host 10.56.4.30 host 100.200.141.20 eq ftp log debugging 

access-list KSPD extended permit object-group NKS_to_ESXi_service object-group NKS_to_ESXi host 100.200.139.119 

access-list KSPD extended permit ip any object-group CRA_DC_AV 

access-list KSPD extended permit tcp host 100.200.32.64 host R15 eq 7803 

access-list KSPD extended permit tcp 100.200.0.0 255.255.0.0 host R15 gt 1024 

access-list KSPD extended permit ip 10.42.44.0 255.255.255.0 host R15 

access-list KSPD extended permit object-group FTP_HTTP_SQL host 10.50.51.14 host Oracle_CSS_Test_DB 

access-list KSPD extended permit tcp object-group Technograd_srv_from_net_10.50 host Oracle_CSS_Test_DB eq sqlnet 

access-list KSPD extended permit tcp host TechnoGrad_VPN host Oracle_CSS_Test_DB eq sqlnet 

access-list KSPD extended permit object-group NKS_VMWARE object-group NKS_VMWARE_PC Net_100.200.130.0 255.255.255.0 

access-list KSPD extended permit ip object-group Teterev_users_NKS Net_100.200.130.0 255.255.255.0 

access-list KSPD extended permit tcp host 100.200.181.210 host 100.200.130.3 eq sqlnet 

access-list KSPD remark From_NKS_to_SBMS

access-list KSPD extended permit tcp 100.200.181.0 255.255.255.0 host 100.200.130.84 eq 5000 

access-list KSPD extended permit tcp object-group SKYLINK_RM host 100.200.130.84 eq 5000 

access-list KSPD extended permit tcp host 100.200.32.64 host 100.200.130.84 eq 5000 

access-list KSPD extended permit object-group NKS_to_ESXi_service object-group NKS_to_ESXi host 100.200.139.211 

access-list KSPD extended permit tcp host 100.200.97.16 host 100.200.130.2 eq sqlnet 

access-list KSPD extended permit ip 10.22.12.0 255.255.255.224 object-group CRA_COD 

access-list KSPD extended permit tcp object-group Technograd_srv_from_net_10.50 object-group Techograd_servers object-group RDP 

access-list KSPD extended permit tcp any host AMT03VISE001 eq 8443 log 

access-list KSPD extended permit udp any host AMT03VISE001 object-group DM_INLINE_UDP_2 

access-list KSPD extended permit ip any host AMT03VISE001 log 

access-list KSPD extended permit tcp any gt 1024 host AMT03VISE001 eq 8443 log 

access-list KSPD extended permit udp any object-group DM_INLINE_UDP_1 host AMT03VISE001 

access-list KSPD extended permit tcp object-group DM_INLINE_NETWORK_1 object-group Techograd_servers object-group RDP 

access-list KSPD extended permit tcp object-group From_CPOK_Lite_MVNO host 100.200.130.50 eq sqlnet 

access-list KSPD extended permit tcp any host 100.200.150.30 eq tacacs 

access-list KSPD extended permit object-group General_Domain any any 

access-list KSPD extended permit udp any any object-group traceroute 

access-list KSPD extended permit object-group VPN any any 

access-list KSPD extended permit icmp any any 

access-list KSPD extended permit ip object-group ADMIN_LVS any 

access-list KSPD extended deny ip any any log 

access-list GD extended permit ip host 100.200.250.2 host 100.200.141.48 

access-list GD extended permit ip host 100.200.250.2 host 100.200.130.5 

access-list GD extended permit ip host 100.200.250.2 Net_100.200.150.0 255.255.255.0 

access-list GD extended permit object-group General_Domain any any 

access-list GD extended permit udp any any object-group traceroute 

access-list GD extended permit icmp any any 

access-list GD extended deny ip any any log 

access-list COD extended permit ip object-group CRA_and_TU Net_10.31.5.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU host PO_198.18.92.227 

access-list COD extended permit ip object-group CRA_and_TU Net_192.168.111.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU Net_192.168.1.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU Net_10.0.0.0 255.224.0.0 

access-list COD extended permit ip object-group CRA_and_TU Net_10.161.133.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU host 10.184.0.3 

access-list COD extended permit tcp object-group CRA Net_100.200.89.0 255.255.255.0 object-group RDP 

access-list COD extended permit ip object-group CRA_and_TU Net_100.200.67.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU Net_100.200.72.0 255.255.252.0 

access-list COD extended permit ip object-group CRA_and_TU Net_10.255.0.0 255.255.0.0 

access-list COD extended permit ip object-group CRA object-group ARM_Rubin 

access-list COD extended permit ip object-group CRA_and_TU 100.200.0.0 255.255.252.0 

access-list COD extended permit ip Net_100.100.100.0 255.255.255.0 host Server_NTP_SSVG 

access-list COD extended permit ip object-group CRA host Server_NTP_SSVG 

access-list COD extended permit ip object-group CRA_COD 10.42.44.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU Net_10.42.0.0 255.255.0.0 

access-list COD extended permit ip object-group CRA_and_TU Net_100.200.24.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU Net_100.200.106.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU Net_100.200.69.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU object-group PRINTER_NETWORKS 

access-list COD extended permit ip Net_100.200.130.0 255.255.255.0 host 100.200.0.78 

access-list COD extended permit ip object-group CRA_COD any 

access-list COD extended permit ip host 100.200.139.25 any 

access-list COD extended permit ip host AMT03VISE001 any 

access-list COD extended permit ip host 100.200.139.27 any 

access-list COD extended permit ip host 100.200.139.20 any 

access-list COD extended permit ip host 100.200.141.9 any 

access-list COD extended permit tcp host Oracle_CSS Net_10.131.5.0 255.255.255.0 eq sqlnet 

access-list COD extended permit object-group Access_from_COD object-group CRA_and_TU any 

access-list COD extended permit ip any host 10.255.32.15 

access-list COD extended permit ip object-group CRA_and_TU Net_87.226.149.64 255.255.255.192 

access-list COD extended permit ip Net_100.200.139.0 255.255.255.0 Net_192.168.50.0 255.255.255.0 

access-list COD extended permit ip object-group CRA_and_TU Net_10.36.0.0 255.255.0.0 

access-list COD extended permit ip Net_100.200.143.0 255.255.255.0 Net_10.50.0.0 255.255.0.0 

access-list COD extended permit ip any host 10.34.8.36 

access-list COD extended permit ip Net_100.200.128.0 255.255.255.0 Net_100.200.159.0 255.255.255.0 

access-list COD extended permit ip Net_100.200.128.0 255.255.255.0 Net_100.200.160.0 255.255.255.0 

access-list COD extended permit object-group TCPUDP Net_100.200.139.0 255.255.255.0 host 100.200.29.29 eq tacacs 

access-list COD extended permit object-group TCPUDP Net_100.200.149.0 255.255.255.0 host 100.200.29.29 eq tacacs 

access-list COD remark access_to_X-tone_Ural_service_RBT

access-list COD extended permit tcp host 100.200.141.96 host 10.178.118.167 eq 10095 

access-list COD extended permit object-group General_Domain any any 

access-list COD extended permit udp any any object-group traceroute 

access-list COD extended permit object-group VPN any any 

access-list COD extended permit icmp any any 

access-list COD extended deny ip any any log 

access-list AMTC-AXE extended deny ip host 100.200.160.10 any 

access-list AMTC-AXE extended permit icmp Net_100.200.160.0 255.255.255.0 100.200.158.0 255.255.255.0 log 

access-list AMTC-AXE extended permit object-group Service_Converter_158.32 Net_100.200.159.0 255.255.255.0 100.200.158.32 255.255.255.224 

access-list AMTC-AXE extended permit ip Net_100.200.160.0 255.255.255.0 100.200.158.0 255.255.255.0 log 

access-list AMTC-AXE extended permit ip Net_100.200.160.0 255.255.255.0 any log disable 

access-list AMTC-AXE extended permit udp any any object-group traceroute 

access-list AMTC-AXE extended deny ip any any log disable 

access-list Converter extended permit ip 100.200.158.32 255.255.255.224 Net_100.200.159.0 255.255.255.0 

access-list Converter extended deny ip any any log 

access-list APM-AMTC-AXE extended permit icmp Net_100.200.159.0 255.255.255.0 100.200.158.0 255.255.255.0 log 

access-list APM-AMTC-AXE extended permit object-group Service_Converter_158.32 Net_100.200.159.0 255.255.255.0 100.200.158.32 255.255.255.224 

access-list APM-AMTC-AXE extended permit ip Net_100.200.159.0 255.255.255.0 100.200.158.0 255.255.255.0 log 

access-list APM-AMTC-AXE extended permit ip Net_100.200.159.0 255.255.255.0 any log disable 

access-list APM-AMTC-AXE extended permit udp any any object-group traceroute 

access-list APM-AMTC-AXE extended deny ip any any log disable 

access-list Mediation extended permit ip host 10.54.0.2 any 

access-list Mediation extended permit ip host 10.54.0.4 any 

access-list Mediation extended permit udp any any object-group traceroute 

access-list Mediation extended permit icmp any any 

access-list Mediation extended deny ip any any log 

access-list ACS_Replication extended deny ip host 100.200.29.29 host 100.200.150.30 

access-list ACS_Replication extended deny ip host 100.200.150.30 host 100.200.29.29 

access-list ACS_Replication extended permit tcp any any eq 2000 

access-list mail_study_center extended deny ip host smt03edu001.mt.rt.ru host 100.200.1.99 

access-list mail_study_center extended permit tcp any any eq smtp 

pager lines 24

logging enable

logging timestamp

logging buffer-size 8192

logging buffered debugging

logging trap informational

logging asdm informational

logging facility 22

logging host KSPD 192.168.50.3

logging host management 100.200.29.15

no logging message 418001

no logging message 710005

no logging message 400010

no logging message 400011

no logging message 400014

no logging message 400015

no logging message 302015

no logging message 302014

no logging message 302013

no logging message 302016

no logging message 302021

no logging message 302020

mtu KSPD 1500

mtu COD_141 1500

mtu GD_250 1500

mtu management 1500

mtu Mediation 1500

mtu toCRA_150 1500

mtu ARM-AMTC-AXE_159 1500

mtu AMTC-AXE_160 1500

mtu Converter_158 1500

ip verify reverse-path interface GD_250

ip audit name ATTACK attack action alarm

ip audit name INFO info action alarm

ip audit interface KSPD INFO

ip audit interface KSPD ATTACK

ip audit interface COD_141 INFO

ip audit interface COD_141 ATTACK

ip audit interface GD_250 INFO

ip audit interface GD_250 ATTACK

no failover

icmp unreachable rate-limit 10 burst-size 5

icmp permit any KSPD

icmp permit any Mediation

icmp permit any AMTC-AXE_160

asdm image disk0:/asdm-645-206.bin

asdm location Net_100.200.72.0 255.255.252.0 management

asdm location Net_10.2.31.192 255.255.255.240 management

asdm location Net_10.22.0.0 255.255.0.0 management

asdm location Test_srv_ASR_BFN 255.255.255.255 management

asdm location 10.31.70.32 255.255.255.255 management

asdm location Net_100.200.36.0 255.255.255.0 management

asdm location 10.184.0.0 255.255.0.0 management

asdm location 87.226.149.66 255.255.255.255 management

asdm location Net_87.226.149.64 255.255.255.192 management

asdm location Net_192.168.50.0 255.255.255.0 management

asdm location Net_10.255.0.0 255.255.0.0 management

asdm location Net_10.131.5.0 255.255.255.0 management

asdm location Net_10.161.133.0 255.255.255.0 management

asdm location 10.184.0.3 255.255.255.255 management

asdm location Net_10.36.0.0 255.255.0.0 management

asdm location 100.200.32.0 255.255.255.0 management

asdm location 10.61.0.0 255.255.0.0 management

asdm location 10.42.44.0 255.255.255.0 management

asdm location 100.200.203.0 255.255.255.0 management

asdm location 100.200.192.0 255.255.240.0 management

asdm location 100.200.130.73 255.255.255.255 management

asdm location 100.200.130.78 255.255.255.255 management

asdm location 100.200.130.79 255.255.255.255 management

asdm location 100.200.130.151 255.255.255.255 management

asdm location 100.200.130.152 255.255.255.255 management

asdm location host_100.200.67.43 255.255.255.255 management

asdm location 100.200.107.0 255.255.255.0 management

asdm location 100.200.5.0 255.255.255.0 management

asdm location 100.200.50.0 255.255.255.0 management

asdm location 100.200.141.45 255.255.255.255 management

asdm location 100.200.182.0 255.255.255.0 management

asdm location 10.56.7.142 255.255.255.255 management

asdm location Net_10.50.0.0 255.255.0.0 management

asdm location 10.54.0.4 255.255.255.255 management

asdm location 100.200.181.0 255.255.255.0 management

asdm location 100.200.182.91 255.255.255.255 management

asdm location 100.200.139.119 255.255.255.255 management

asdm location smt03edu001.mt.rt.ru 255.255.255.255 management

asdm location 10.50.51.14 255.255.255.255 management

asdm location 100.200.181.181 255.255.255.255 management

asdm location TechnoGrad_VPN 255.255.255.255 management

asdm location TechnoGrad41 255.255.255.255 management

asdm location TechnoGrad42 255.255.255.255 management

asdm location TechnoGrad43 255.255.255.255 management

asdm location TechnoGrad44 255.255.255.255 management

asdm location AMT03VISE001 255.255.255.255 management

asdm location TechnoGrad_VPN8 255.255.255.248 management

asdm location 100.200.158.0 255.255.255.240 management

no asdm history enable

arp timeout 14400

global (Mediation) 1 interface

static (Mediation,COD_141) 100.200.141.20 10.54.0.2 netmask 255.255.255.255 

static (Mediation,KSPD) 100.200.141.20 10.54.0.2 netmask 255.255.255.255 

static (Mediation,COD_141) 100.200.141.96 10.54.0.4 netmask 255.255.255.255 

static (Mediation,KSPD) 100.200.141.96 10.54.0.4 netmask 255.255.255.255 

access-group KSPD in interface KSPD

access-group COD in interface COD_141

access-group GD in interface GD_250

access-group Mediation in interface Mediation

access-group toCRA in interface toCRA_150

access-group APM-AMTC-AXE in interface ARM-AMTC-AXE_159

access-group AMTC-AXE in interface AMTC-AXE_160

access-group Converter in interface Converter_158

route KSPD 0.0.0.0 0.0.0.0 100.200.0.1 1

route KSPD 10.11.0.4 255.255.255.255 100.200.1.1 1

route KSPD 100.200.0.202 255.255.255.255 100.200.1.1 1

route KSPD Net_100.200.7.0 255.255.255.0 100.200.0.92 1

route KSPD 100.200.13.0 255.255.255.255 100.200.1.1 1

route KSPD Net_100.200.28.0 255.255.255.0 100.200.0.92 1

route management 100.200.29.0 255.255.255.0 100.200.29.2 1

route KSPD 100.200.29.29 255.255.255.255 100.200.0.1 1

route KSPD 100.200.29.199 255.255.255.255 100.200.0.1 1

route KSPD Server_NTP_SSVG 255.255.255.255 100.200.0.92 1

route KSPD Net_100.200.111.0 255.255.255.0 100.200.1.1 1

route COD_141 Net_100.200.128.0 255.255.255.0 100.200.141.254 1

route COD_141 Net_100.200.130.0 255.255.255.0 100.200.141.233 1

route COD_141 Net_100.200.139.0 255.255.255.0 100.200.141.233 1

route COD_141 100.200.141.0 255.255.255.0 100.200.141.254 1

route COD_141 Net_100.200.143.0 255.255.255.0 100.200.141.254 1

route COD_141 Net_100.200.149.0 255.255.255.0 100.200.141.254 1

route COD_141 Net_100.200.150.0 255.255.255.0 100.200.141.254 1

route COD_141 100.200.249.0 255.255.255.0 100.200.141.254 1

route Mediation 10.53.65.6 255.255.255.255 10.54.0.3 1

route COD_141 10.60.0.0 255.255.0.0 100.200.141.254 1

route COD_141 10.60.4.36 255.255.255.252 100.200.141.254 1

route Mediation 10.61.32.129 255.255.255.255 10.54.0.3 1

route COD_141 10.76.172.50 255.255.255.255 100.200.141.254 1

route COD_141 10.76.172.51 255.255.255.255 100.200.141.254 1

route COD_141 10.76.172.52 255.255.255.255 100.200.141.254 1

route COD_141 10.76.172.58 255.255.255.255 100.200.141.254 1

route Mediation 10.247.0.107 255.255.255.255 10.54.0.3 1

route Mediation 10.247.65.6 255.255.255.255 10.54.0.3 1

route Mediation 10.255.0.112 255.255.255.252 10.54.0.3 1

route KSPD Net_87.226.149.64 255.255.255.192 100.200.1.1 1

route COD_141 Net_100.100.100.0 255.255.255.0 100.200.141.254 1

route KSPD 172.19.0.0 255.255.255.0 ASA-1HotLine 1

route KSPD 172.20.0.0 255.255.255.0 ASA-1HotLine 1

route KSPD 172.28.230.0 255.255.255.0 100.200.1.1 1

route KSPD Net_192.168.1.0 255.255.255.0 100.200.1.1 1

route KSPD Net_192.168.50.0 255.255.255.0 100.200.1.1 1

route KSPD Net_192.168.111.0 255.255.255.0 100.200.1.1 1

route COD_141 192.168.125.0 255.255.255.0 100.200.141.254 1

route KSPD Net_198.18.18.0 255.255.255.0 100.200.1.1 1

route KSPD PO_198.18.92.227 255.255.255.255 ASA-1HotLine 1

route COD_141 220.208.79.0 255.255.255.0 100.200.141.254 1

timeout xlate 3:00:00

timeout conn 5:00:00 half-closed 0:10:00 udp 0:02:00 icmp 0:00:02

timeout sunrpc 0:10:00 h323 0:05:00 h225 1:00:00 mgcp 0:05:00 mgcp-pat 0:05:00

timeout sip 0:30:00 sip_media 0:02:00 sip-invite 0:03:00 sip-disconnect 0:02:00

timeout sip-provisional-media 0:02:00 uauth 0:05:00 absolute

timeout tcp-proxy-reassembly 0:01:00

timeout floating-conn 0:00:00

dynamic-access-policy-record DfltAccessPolicy

aaa-server TACACS+ protocol tacacs+

aaa-server TACACS+ (KSPD) host 192.168.50.25

 key [eqyz17:30

aaa-server TACACS+ (KSPD) host 192.168.50.26

 key [eqyz17:30

aaa authentication http console TACACS+ LOCAL

aaa authentication ssh console TACACS+ LOCAL

aaa authentication telnet console TACACS+ LOCAL

aaa authorization command LOCAL 

http server enable

http 100.200.29.0 255.255.255.0 management

http 100.200.111.254 255.255.255.255 KSPD

snmp-server host KSPD 100.200.0.190 community Ver2ake82access version 2c

snmp-server host KSPD Server_NNM poll community Ver2ake82access

snmp-server host KSPD Server_SMT34AV001 community Ver2ake82access

snmp-server host KSPD 100.200.1.254 community Ver2ake82accessn version 2c

no snmp-server location

no snmp-server contact

snmp-server community Ver2ake82access

snmp-server enable traps snmp authentication linkup linkdown coldstart

snmp-server enable traps syslog

snmp-server enable traps remote-access session-threshold-exceeded

  inspect dcerpc dcerpc_map 

 class class-default

  set connection decrement-ttl

!

service-policy global_policy global

prompt hostname context 

no call-home reporting anonymous

call-home

 profile CiscoTAC-1

  no active

  destination address http https://tools.cisco.com/its/service/oddce/services/DDCEService

  destination address email callhome@cisco.com

  subscribe-to-alert-group inventory periodic monthly

  subscribe-to-alert-group configuration periodic monthly

  subscribe-to-alert-group telemetry periodic daily

Cryptochecksum:d82c6e2222576cc11df58e70493767b0
`;

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
          showDiffOnly={true}
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
