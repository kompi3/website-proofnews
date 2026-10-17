---
title: "Public Wi-Fi Is Safe Without a VPN? What the Evidence Really Says"
description: "A persistent claim says HTTPS made VPNs pointless on public Wi-Fi. We checked the research, a seven-year prison sentence, and what the FTC still says — and the answer is messier than the slogans."
pubDate: 2026-08-14T09:00:00+07:00
category: 'Technology'
verdict: 'Misleading'
---

You have heard it at the airport gate, seen it in the comments under every VPN ad, and read it in headlines that never quite die: you do not need a VPN anymore. The padlock in your browser — HTTPS — has made public Wi-Fi safe, and anyone telling you otherwise is just trying to sell you a subscription. It is a comforting claim. It is also the kind of claim that gets more dangerous the more people believe it.

The idea did not start on social media. It got its biggest boost from mainstream coverage: NBC News reported that cybersecurity experts believe most people can safely ditch VPNs, quoting Nicholas Weaver, a cybersecurity lecturer at the University of California, Berkeley, who said, "Most commercial VPNs are snake oil from a security standpoint." Similar arguments have been made by outlets like MakeUseOf, which urged readers to "stop paying for a VPN to be safe on coffee shop Wi-Fi," and XDA Developers, which argued that public Wi-Fi "isn't as dangerous as VPN ads want you to believe." Even a VPN company, Windscribe, lists "Use public Wi-Fi without a VPN and you'll get hacked" as a myth in its 2026 guide, arguing the instant-hack panic is mostly outdated — a relic of 2012.

There is a genuine technical reason the claim took hold. Nearly a decade ago, the web shifted to HTTPS, and today almost 90 percent of websites use HTTPS encryption, according to analyses cited by outlets like SlashGear. Browsers now warn you loudly when a page is not encrypted. So the old nightmare — a stranger at the next table reading your passwords out of the air like text on a billboard — genuinely is rarer than it used to be. But "rarer" is not "gone," and "safe" is a very strong word. ProofNews examined what HTTPS actually protects, what it leaves exposed, what attacks are still documented in 2026, and what consumer-protection agencies continue to advise. The claim turns out to have a kernel of truth wrapped in a dangerous oversimplification.

<picture>
<source srcset="/img/1550751827-4bd374c3f58b-1000.avif" type="image/avif">
<source srcset="/img/1550751827-4bd374c3f58b-700.webp" type="image/webp">
<img src="/img/1550751827-4bd374c3f58b-700.webp" alt="A padlock resting on a computer circuit board, symbolizing cybersecurity" width="1000" height="563" fetchpriority="high" decoding="async">
</picture>
*Illustration: a padlock on a circuit board. The claim that public Wi-Fi is safe without protection has a kernel of truth — and a large, ignored remainder.*

## Where the claim comes from

To judge the claim fairly, it helps to hear its strongest version. Security researcher Peter Hansen, interviewed by the travel site TiltedMap, put it bluntly: "It doesn't matter if it's your social security number or a tweet, it doesn't matter if you're on your home Wi-Fi or a public Wi-Fi, it is simply not possible for anyone but you or the website you are connecting to to determine the contents of your communication." His point: once a site uses HTTPS, the contents are sealed end to end, and a VPN adds nothing to that particular seal. Any serious website, including banks, uses HTTPS — about 90 percent of US websites, he noted.

Hansen also offered a reality check on the threat model itself: "On public Wi-Fi you are definitely at higher risk of attacks, however… sitting around in a coffee shop trying to infect everyday users is a very high-risk, low-reward venture for hackers." An individual stolen credit card, he noted, is worth only about $10 to $20 to a criminal, who would rather raid a database of tens of thousands from home. Weaver made a similar point to NBC: "Remember, someone attacking you at the coffee shop needs to be basically at the coffee shop."

That logic is coherent, and it explains why the claim spread. But notice what it concedes: public Wi-Fi carries "definitely" higher risk, and HTTPS protects "the contents" of communication with "the website you are connecting to." Both of those caveats matter enormously, because attackers in the real world do not politely limit themselves to passively reading encrypted contents. They impersonate the network itself, watch everything around the contents, and trick you into connecting to them instead of the website you meant to visit.

## What HTTPS actually protects — and what it leaves visible

HTTPS is genuinely one of the great security wins of the internet era. When your browser connects to a bank, an email provider, or a social network over HTTPS, the modern TLS 1.3 protocol encrypts the data in transit so that someone merely listening on the network cannot read your password, your messages, or the page content. Certificate checks also authenticate the site, so your browser will warn you if something is wrong with the site's identity. That is why the catastrophic, drive-by password sniffing of the early 2010s largely faded: the plaintext simply is not there to grab anymore.

What HTTPS does not do is hide the fact that you are visiting a site at all. During the TLS handshake, the Server Name Indication (SNI) field is sent in plain text, so anyone watching the network — the café's Wi-Fi operator, the hotel's IT provider, or an attacker on the same network — can see which domains you visit, even though they cannot see what you did on them. They know you visited your bank's domain; they just cannot read your balance. Your DNS queries, which translate domain names into addresses, typically flow through the Wi-Fi operator's resolver too, handing the operator a running log of every site you looked up — unless you use encrypted DNS or a VPN.

Then there is the metadata that encryption never touches: the sizes of the data packets, the timing of your requests, the destination IP addresses. As security explainers note, a determined observer can derive a surprising amount from traffic patterns alone. None of this means your banking session is readable — it is not. But it means the claim's picture of total safety is incomplete: on public Wi-Fi without protection, you are not invisible. You are merely unreadable in the middle of a conversation whose participants, timing, and destinations are all on display.

There is a technical fix on the horizon — Encrypted Client Hello (ECH), which would seal the SNI as well — but it is not yet universal, and the network operator still sees the IP addresses you connect to. The padlock means the letter is sealed. It does not mean nobody can see the envelope.

## The attack HTTPS cannot stop: the evil twin

Here is the scenario the "HTTPS is enough" argument keeps missing. HTTPS protects your connection to the real website. It does nothing if you are tricked into connecting to the attacker's hardware instead — and that trick is trivially easy to pull off.

It is called an "evil twin" attack: a criminal sets up a Wi-Fi hotspot with the same name (SSID) as the legitimate network — "Airport_Free_WiFi," "Hotel_Guest" — and waits for devices to join it, sometimes automatically. Once you are on the attacker's network, they can redirect you to a fake login page that harvests your credentials before you ever reach a real HTTPS site. Encryption is irrelevant at that point, because you typed your password directly into the attacker's form. The Federal Trade Commission itself warns that scammers "create fake websites and encrypt them to make you think they're safe when they're not" — the padlock on a phishing page protects your data on its way to the scammer, not from the scammer.

This is not a theoretical exercise. In November 2025, a 44-year-old Australian man was sentenced to seven years and four months in prison for running exactly this kind of operation. According to reporting by BleepingComputer, the man — identified as Michael Clapsis — used a portable wireless device known as a Wi-Fi Pineapple to broadcast networks with the same names as legitimate hotspots at airports in Perth, Melbourne, and Adelaide, and even on domestic flights. Travelers who connected were funneled to phishing pages that stole their email and social media credentials. The Australian Federal Police said: "Forensic analysis of data and the seized devices identified thousands of intimate images and videos, personal credentials belonging to other people, and records of fraudulent WiFi pages." He had used stolen credentials to break into victims' accounts, monitor their communications, and steal private images. He was caught only after airline staff reported a suspicious network on a flight to Perth; his luggage was seized in April 2024 and he was charged that July.

The case is extreme in its depravity but ordinary in its method — a device costing under $500, networks that took minutes to set up, victims who had no way to tell the fake hotspot from the real one. And it is not the only incident. In 2024, the free Wi-Fi at 19 major UK railway stations operated by Network Rail was compromised. The UAE has recorded more than 12,000 Wi-Fi network breaches since the beginning of 2025 alone, according to security reporting. Surveys consistently find that more than 40 percent of public Wi-Fi users have experienced some form of data breach or security incident on open networks.

Security researchers documenting the 2026 threat landscape list six attacks still active on public Wi-Fi: man-in-the-middle interception, evil-twin hotspots, packet sniffing, ARP spoofing, session hijacking, and compromised captive portals — those "sign in to continue" pages that can be faked to push malware, such as a bogus "Update Chrome to continue" prompt that installs spyware before granting access. One analysis estimates that evil-twin and SSL-stripping attacks still account for about 19 percent of cyberattacks. Every one of these works by attacking the connection before or around HTTPS, not by breaking the encryption itself — which is precisely why "HTTPS exists, therefore you are safe" misses the point.

<picture>
<source srcset="/img/1518770660439-4636190af475-1000.avif" type="image/avif">
<source srcset="/img/1518770660439-4636190af475-700.webp" type="image/webp">
<img src="/img/1518770660439-4636190af475-700.webp" alt="Close-up of a computer circuit board with electronic components" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Illustration: the hardware behind every hotspot. Modern encryption protects the contents of your connection — but not the network you join to make it.*
## What the numbers say

The "safe without protection" claim also sits uneasily with what users themselves report. According to a 2025 survey by Panda Security cited by security analysts, 36 percent of Americans suspected they had experienced a security incident after using public Wi-Fi — and 19 percent were certain they had. A March 2026 analysis by CyberFence put it similarly: nearly 40 percent of Americans have experienced a security incident after using public Wi-Fi. These are self-reported figures, not forensic audits, and some incidents may have other causes — but they hardly describe a landscape in which going unprotected is worry-free.

There is also a gap between the claim's advice and what people actually do when they follow it. A 2026 survey of 1,008 US adults found that 42 percent now use a VPN for personal or work purposes, up from 32 percent in 2025 — but 43 percent of VPN users said they relied on a free service, up sharply from 28 percent a year earlier. That surge matters, because the cheapest answer to "should I use protection on public Wi-Fi" can be worse than nothing.

## The free-VPN trap

If the claim nudges anyone toward grabbing the first free VPN they find in an app store, it has arguably made them less safe. In 2026, researchers from the University of Michigan, the University of New Mexico, and IIT Delhi presented MVPNalyzer, a framework for auditing mobile VPN apps at scale, at the Network and Distributed System Security Symposium. They tested 281 free, general-purpose VPN apps downloadable from the Google Play Store on Android 14 devices.

The results were grim. Sixty-one apps transmitted some data without encryption. Five sent sensitive VPN configuration files in cleartext — a flaw that could let an attacker on the same network redirect a user toward a server the attacker controlled. Twenty-nine leaked browser or DNS traffic outside the encrypted tunnel, directly defeating the VPN's core promise. Seventy-six apps sent device identifiers such as Android's advertising ID to third parties, opening the door to tracking and fingerprinting. And 107 of the apps whose configuration files researchers could examine misused or ignored recommended encryption and security practices. These apps accounted for more than 2.4 billion combined installs, according to industry analysis of the study.

A separate research effort found the pattern extends beyond sloppy engineering into outright exploitation: more than 38 percent of free VPN apps examined contained malware, over 84 percent leaked user data such as IP addresses or DNS requests, and 75 percent contained tracking libraries. Documented cases include Hotspot Shield, which was caught injecting advertising code into user traffic, and Hola VPN, which resold its users' bandwidth. Security researchers summarize the economics bluntly: running VPN infrastructure — servers in many countries, bandwidth at scale, engineering, audits — is expensive, and a provider with no subscription revenue recovers the cost somewhere, often by logging and selling user data or embedding trackers.

There are exceptions: free tiers funded by a paying subscriber base, such as Proton VPN's free plan, apply the same privacy rules as the paid product — but they are the exception, not the rule. The lesson for the claim is a sharp one. "You don't need a VPN" is presented as the safe, savvy position. Yet the people most likely to act on Wi-Fi security advice — the 43 percent reaching for a free VPN — are walking into an ecosystem where, in the words of one security outlet, "you would be better off with no VPN than using a dangerous free VPN." A claim that hand-waves away the need for protection without distinguishing a trustworthy tool from a data-harvesting one is not merely incomplete; it is actively unhelpful.

<picture>
<source srcset="/img/1511707171634-5f897ff02aa9-1000.avif" type="image/avif">
<source srcset="/img/1511707171634-5f897ff02aa9-700.webp" type="image/webp">
<img src="/img/1511707171634-5f897ff02aa9-700.webp" alt="A hand holding a smartphone, about to connect to a wireless network" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Illustration: a traveler connects a smartphone at an airport. In Australia, a criminal used a portable device to mimic airport Wi-Fi and steal travelers' credentials — a case that ended in a seven-year prison sentence.*

## What the authorities still say

Perhaps the most telling evidence against the claim comes from the agencies whose job is consumer protection, not selling subscriptions. The Federal Trade Commission's "Wise Up About Wi-Fi" guidance draws a distinction the viral claim erases: an encrypted website protects only the information you send to and from that site, while a secure wireless network encrypts all of the information you send while online. The FTC advises sending personal information only if it is encrypted — by an encrypted website or a secure network — looking for HTTPS and the lock icon throughout a session rather than just at sign-in, logging out when finished, not reusing passwords, and turning off settings that auto-join open networks. Crucially, the FTC states that if you need to send sensitive information over a public network, "you could use a virtual private network (VPN) which encrypts everything that you are sending no matter if the site is encrypted or not."

The FTC's guidance for small businesses is even blunter: employees should "use public Wi-Fi only when they're also using a virtual private network (VPN) to encrypt traffic between their device and the internet," because "public Wi-Fi may be convenient, but it doesn't provide a secure connection on its own." The Federal Communications Commission's consumer tip sheet likewise advises travelers to "use an encrypted VPN" from their device and cautions consumers about the information they send over public networks.

These are not documents written to sell VPN subscriptions. They reflect a consistent expert consensus that HTTPS, for all its value, is one layer — and that the network beneath it, when it is open and shared with strangers, deserves not to be trusted. Notably, even the VPN-skeptical voices agree on the practical measures: disable auto-join so your phone does not latch onto the nearest "Free_WiFi," keep software updated, use unique passwords with two-factor authentication, heed browser certificate warnings, and prefer your phone's mobile data — which is encrypted at the network level — when the Wi-Fi network's legitimacy is uncertain.

There is one more honest caveat the evidence demands, and it cuts against VPN marketing too. A VPN typically activates only after you have joined the network and clicked through its captive portal — so it cannot protect you during that initial connection, and it cannot stop you from handing credentials to a fake login page, as Windscribe's own myth-busting guide acknowledges. A VPN is a strong layer, not a magic shield: it hides your destinations from the local network, encrypts everything including DNS, and defeats passive snooping and most man-in-the-middle tricks — but it will not save you from phishing, malware, or an ignored certificate warning. The claim's defenders are right that VPN ads oversell. They are wrong to conclude from that overselling that no protection is needed.

<picture>
<source srcset="/img/1594663653925-365bcbf7ef86-1000.avif" type="image/avif">
<source srcset="/img/1594663653925-365bcbf7ef86-700.webp" type="image/webp">
<img src="/img/1594663653925-365bcbf7ef86-700.webp" alt="A smartphone displaying a search screen, held in a hand" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Illustration: reaching for protection. A 2026 audit of 281 free Android VPN apps found many leaked traffic or tracked users — the free option can be worse than none.*

<picture>
<source srcset="/img/1526304640581-d334cdbbf45e-1000.avif" type="image/avif">
<source srcset="/img/1526304640581-d334cdbbf45e-700.webp" type="image/webp">
<img src="/img/1526304640581-d334cdbbf45e-700.webp" alt="Abstract digital security concept illustration" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Illustration: weighing the evidence. HTTPS is a genuine security win — but it is one layer, not a guarantee.*

## The Verdict

**Misleading.** The claim that public Wi-Fi is safe to use without protection takes a real technical improvement — the near-universal adoption of HTTPS — and stretches it into a blanket assurance the evidence does not support.

What is true in the claim: for routine browsing on websites and apps that properly implement HTTPS, the contents of your communication are encrypted, and a stranger on the same network cannot simply read your passwords out of the air. The VPN industry's scariest ads do exaggerate that particular scenario, and experts like Nicholas Weaver and Peter Hansen are right that a VPN adds little to the content-level security of an already-encrypted session.

What the claim gets wrong — and dangerously so — is everything around those contents. HTTPS does not hide which sites you visit: the SNI field and your DNS queries expose your destinations to the network operator in plain text. HTTPS does not protect you from the network itself: evil-twin hotspots, fake captive portals, ARP spoofing, and session hijacking attack the connection before or around the encryption, which is why an Australian court handed a seven-year prison sentence to a man who harvested travelers' credentials with a $500 device at three airports. HTTPS does not make an open, stranger-shared network trustworthy — which is why the FTC still advises using a VPN for sensitive traffic on public networks and tells businesses their staff should use public Wi-Fi only with one. And the claim's casual "you don't need protection" framing ignores the trap waiting for those who seek cheap protection: a 2026 audit of 281 free VPN apps found dozens leaking traffic, transmitting data unencrypted, or feeding advertising identifiers to third parties.

The honest version of the advice is less catchy but actually useful. On a network you know and trust — your home, your office, a password-protected hotspot running modern WPA2 or WPA3 encryption — browsing HTTPS sites without a VPN is, for most people, reasonably safe. On an open network you do not control — the airport, the café, the hotel lobby — treat the network as hostile: connect a reputable, paid or freemium VPN before you do anything sensitive, keep auto-join off, prefer mobile data when in doubt, and never type credentials into a login page you did not expect to see. "HTTPS made the coffee-shop hacker mostly obsolete" is a fair summary of a decade of progress. "Public Wi-Fi is safe without protection" is a slogan — and slogans are exactly what attackers count on you believing.

*The next time a headline tells you that you can safely ditch your VPN, ask what it is not telling you: who runs the network, who can see where you went, and what happens before the padlock ever appears.*
