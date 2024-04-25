
![Diagram](https://www.pngitem.com/pimgs/m/33-334647_networking-png-transparent-images-computer-network-png-png.png)

# Introduction


# Brief
Use a Terminal Commands to answer the following questions. Your answer should consist the command you use and the output. You may simply copy and paste your terminal's content into the respective code blocks.

# Questions

### Question 1: Get the IP Address of skillsunion.com.

**Command**

`nslookup skillsunion.com`

**Output**

Server:		208.67.222.222
Address:	208.67.222.222#53

Non-authoritative answer:
Name:	skillsunion.com
Address: 165.22.244.85

----------------------

### Question 2: Determine the network latency of skillsunion.com?

**Command**
`ping skillsunion.com`

**Output**
PING skillsunion.com (165.22.244.85): 56 data bytes
64 bytes from 165.22.244.85: icmp_seq=0 ttl=51 time=7.560 ms
64 bytes from 165.22.244.85: icmp_seq=1 ttl=51 time=5.622 ms

59 packets transmitted, 59 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 5.367/6.773/10.146/1.206 ms

----------------------

### Question 3: Identify all devices on the path between your computer to skillsunion.com.

**Command**
`traceroute skillsunion.com`

**Output**
traceroute to skillsunion.com (165.22.244.85), 64 hops max, 52 byte packets

----------------------

### Question 4: Look up the DNS of skillsunion.com without using nslookup.

**Command**

`dig skillsunion.com`

**Output**

skillsunion.com.	2097	IN	A	165.22.244.85

Query time: 4 msec
SERVER: 192.168.10.1#53(192.168.10.1)
WHEN: Thu Apr 25 20:45:16 +08 2024
MSG SIZE  rcvd: 60

----------------------

### Question 5: Find out the whois details of skillsunion.com.

**Command**

`whois skillsunion.com`

**Output**

- domain:       COM

- organisation: VeriSign Global Registry Services
- address:      12061 Bluemont Way
- address:      Reston VA 20190
- address:      United States of America (the)

- contact:      administrative
- name:         Registry Customer Service
- organisation: VeriSign Global Registry Services
- address:      12061 Bluemont Way
- address:      Reston VA 20190
- address:      United States of America (the)
- phone:        +1 703 925-6999
- fax-no:       +1 703 948 3978
- e-mail:       info@verisign-grs.com

- contact:      technical
- name:         Registry Customer Service
- organisation: VeriSign Global Registry Services
- address:      12061 Bluemont Way
- address:      Reston VA 20190
- address:      United States of America (the)
- phone:        +1 703 925-6999
- fax-no:       +1 703 948 3978
- e-mail:       info@verisign-grs.com
- whois:        whois.verisign-grs.com
- status:       ACTIVE
- remarks:      Registration information: http://www.verisigninc.com

- created:      1985-01-01
- changed:      2023-12-07
- source:       IANA

- whois.verisign-grs.com

- Domain Name: SKILLSUNION.COM
- Registry Domain ID: 2443102751_DOMAIN_COM-VRSN
- Registrar WHOIS Server: whois.namecheap.com
- Registrar URL: http://www.namecheap.com
- Updated Date: 2023-09-14T03:50:23Z
- Creation Date: 2019-10-13T04:16:35Z
- Registry Expiry Date: 2026-10-13T04:16:35Z
- Registrar: NameCheap, Inc.
- Registrar IANA ID: 1068
- Registrar Abuse Contact Email: abuse@namecheap.com
- Registrar Abuse Contact Phone: +1.6613102107
- Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
- Name Server: DNS1.REGISTRAR-SERVERS.COM
- Name Server: DNS2.REGISTRAR-SERVERS.COM
- DNSSEC: unsigned
- URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/
