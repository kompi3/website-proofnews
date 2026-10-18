---
title: "No, That QR Code Is Not Safe to Scan: The Truth About 'Quishing,' the Scam Hiding in Plain Sight"
description: "QR codes feel safe — they're everywhere, from parking meters to restaurant tables. But scammers are pasting fake codes over real ones, and the FTC and FBI both say quishing is one of the fastest-growing scams in the world. We investigated the evidence."
pubDate: 2026-10-18
category: 'Technology'
verdict: 'False'
---

Picture the scene: you are running late in an unfamiliar city, you pull into a parking space, and the meter tells you to scan a QR code to pay. You point your phone at it, a payment page loads, you type in your card number, and you hurry off. It feels completely normal. Quick, contactless, modern.

Now imagine this: the QR code you just scanned was never the city's. Somebody printed a sticker, walked up to the meter earlier that morning, and pasted their own code over the real one. The page that asked for your card number was a convincing forgery. Your money went to a scammer's pocket, your card details went to a criminal database — and you still owe the city for the parking.

This is not a hypothetical. On September 3, 2026, the U.S. Federal Trade Commission issued a consumer alert warning exactly this: people have reported scammers covering up legitimate QR codes on parking meters with a QR code of their own, sending drivers to fake sites built to steal their money, their personal information, or both. The scam even has a name — "quishing," QR-code phishing — and it is one of the fastest-growing forms of fraud on the planet.

So let us examine the claim at the heart of our daily behavior: **QR codes are safe to scan.** Almost everyone acts as though this is true. The evidence says it is not.

<picture>
<source srcset="/img/1511707171634-5f897ff02aa9-1000.avif" type="image/avif">
<source srcset="/img/1511707171634-5f897ff02aa9-700.webp" type="image/webp">
<img src="/img/1511707171634-5f897ff02aa9-700.webp" alt="A hand holding a smartphone, about to scan a QR code" width="1000" height="563" fetchpriority="high" decoding="async">
</picture>
*A hand holding a smartphone, about to scan. That instant of trust — pointing your camera at a code whose destination you cannot see — is exactly what quishing attacks exploit.*

## How the little black-and-white square conquered everything

To understand why quishing works, you have to understand what a QR code is — and, more importantly, what it is not. A QR code is nothing more than a machine-readable container. It holds a short string of data: a website address, a payment request, Wi-Fi credentials, a calendar event, an app download link. The pattern of black and white squares is deliberately unreadable to humans; that is the entire point. You cannot look at a QR code and know where it leads. You can only scan it and find out.

This unreadability was harmless when QR codes lived mostly on factory floors, tracking car parts through manufacturing plants — the job they were invented for. But then the pandemic arrived, and contactless everything became the norm. Restaurants replaced paper menus with table stickers. Parking operators replaced coin slots with scan-to-pay. Boarding passes, event tickets, vaccine records, Wi-Fi sharing, charity donations, crypto payments — all of it moved through those little squares. The Federal Bureau of Investigation noted in its public warning that businesses used QR codes "more frequently during the Covid-19 pandemic" to enable contactless access and payments, and criminals noticed the opportunity at exactly the same moment consumers got comfortable.

That is the perfect anatomy of a scam: a technology everyone trusts, that nobody can visually verify, deployed in public spaces where anyone can tamper with it. A criminal does not need to hack your phone. They just need a printer, a sheet of adhesive stickers, and a convincing fake website.

## The parking meter: quishing's perfect crime scene

The parking meter scam is quishing at its simplest and most elegant — which is to say, at its most dangerous. The mechanics were laid out clearly in the FTC's September 2026 alert and in reporting on it: a criminal creates a QR-code sticker that links to a fake parking-payment page, places it over or alongside the legitimate code on the meter or pay station, and waits. A driver scans it, sees a professional-looking payment portal, enters a card number, and believes the parking is paid. The legitimate parking system never receives a cent, the driver may still get a ticket, and the card details now belong to a stranger.

This is not a one-city curiosity. Fake QR stickers on parking payment codes have been reported in cities including San Antonio and Houston in Texas, and in several cities in the United Kingdom. The pattern repeats because the economics are irresistible: a single sticker costs pennies, it can sit on a meter for days, and every scan is a potential harvest of card data.

And parking meters are only the beginning. Investigators and consumer agencies have documented the same sticker-swap trick — or close variants of it — in a depressingly long list of settings:

- **Fake delivery notices.** A card left at your door claims a package "couldn't be delivered." The QR code supposedly lets you reschedule. Instead, it opens a cloned FedEx or USPS page built to harvest your login and payment information.
- **Restaurant table swaps.** Diners have reported that the QR code taped to their table led to a phishing page instead of the menu — the original sticker had been covered with a fraudulent one.
- **Fake payment and account emails.** A message claims a payment failed, or that there is a problem with your account, and insists the only way to fix it is to scan a QR code — a pretext the FTC specifically lists among quishing's favorite stories, alongside missed deliveries and "suspicious activity" warnings.
- **Public Wi-Fi lures.** QR codes in airports, cafés, and hotels offering "free Wi-Fi" can be swapped for malicious versions that connect your device to a network controlled by an attacker.
- **Fake event tickets and app downloads.** A code promising a ticket or an app instead delivers a phishing page or malware.

The physical scam has a digital twin that is even bigger. In corporate inboxes, attackers embed malicious QR codes in emails — often inside PDF or image attachments — because the malicious URL is encoded in an image rather than written as clickable text. Traditional email filters, built to inspect text links, frequently miss them. The victim scans the code with their phone, moving from a protected work computer to a personal device with far fewer defenses, and lands on a fake Microsoft 365 or banking login page. According to cybersecurity researchers, roughly nine out of ten QR-based attacks observed in 2025 were aimed at stealing login credentials.

<picture>
<source srcset="/img/1550751827-4bd374c3f58b-1000.avif" type="image/avif">
<source srcset="/img/1550751827-4bd374c3f58b-700.webp" type="image/webp">
<img src="/img/1550751827-4bd374c3f58b-700.webp" alt="A padlock resting on a circuit board, symbolizing cybersecurity" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*A padlock on a circuit board. Quishing bypasses technical defenses not by breaking encryption but by exploiting the one component no firewall protects: human trust.*

## The numbers behind the surge

Skeptics might ask whether quishing is a genuine epidemic or just a scary-sounding headline amplified by the cybersecurity industry, which does have a commercial interest in scary headlines. That is a fair question, and the data answers it decisively: this threat is real, it is measured by multiple independent sources, and the curve points almost straight up.

Start with the broad trend. Security researchers at Keepnet Labs, tracking phishing payloads over several years, found that QR codes accounted for just 0.8 percent of phishing attacks in 2021 — a rounding error. By 2025, the share had risen to 12 percent of all phishing attacks: a fifteenfold increase in four years. A separate analysis found that between October 2024 and March 2025 alone, more than 1.7 million unique malicious QR codes were detected in email attachments, with an average of 2.7 million QR-containing emails found daily in that period. Between August and November 2025, detected QR-code phishing emails surged from about 46,000 to nearly 250,000 — a fivefold jump in a single quarter, timed to the holiday shopping season when people scan codes for deals, tickets, and shipping updates.

Other trackers tell the same story with different datasets. One threat-intelligence analysis measured a 433 percent increase in reported quishing incidents between 2023 and 2024 alone; another put the growth of QR-code phishing attacks at 400 percent between 2023 and 2025. The proportion of QR attacks focused on credential theft — fake login pages designed to harvest usernames and passwords — sits at roughly 90 percent. Mastercard was the single most impersonated brand in QR phishing, with more than 14,000 malicious codes detected, followed by Microsoft with nearly 12,000.

The human cost is visible in law-enforcement data, not just vendor telemetry. In the United Kingdom, the national fraud reporting service Action Fraud recorded 784 reports of quishing between April 2024 and April 2025, with reported losses of almost £3.5 million. And the vulnerability is structural: surveys suggest that nearly three-quarters of Americans scan QR codes without verifying them first, and only about four in ten consumers say they can reliably identify a malicious code. More than 26 million Americans have been directed to malicious sites through QR codes.

Even the defenders admit the trend favors the attackers. Security analysts note that criminals are now splitting malicious QR codes into multiple image fragments that look harmless individually and only assemble into the full code inside the victim's inbox — a trick designed to defeat image-scanning defenses. Others render codes in ASCII art or Unicode characters instead of graphics, slipping past the OCR scanners meant to catch them. Each defensive advance is met with an offensive workaround, and the arms race is being run at the speed of the holiday shopping calendar.

## The FBI and the FTC agree: this is not hype

When both the Federal Bureau of Investigation and the Federal Trade Commission issue formal public warnings about the same scam, it is worth taking seriously. The FBI did so first, in January 2022, when its Internet Crime Complaint Center published a public service announcement stating plainly: "Cybercriminals are tampering with QR codes to redirect victims to malicious sites that steal login and financial information."

The bureau's warning described exactly the playbook we have seen play out ever since: criminals tamper with both digital and physical QR codes, replacing legitimate codes with malicious ones; a victim scans what they believe is a legitimate code but is directed to a malicious site that prompts them to enter login and financial information; malicious sites can also install malware on the victim's device or divert payments to accounts under the criminals' control. The FBI added a sobering financial reality: "While QR codes are not malicious in nature, it is important to practice caution when entering financial information as well as providing payment through a site navigated to through a QR code." And: "Law enforcement cannot guarantee the recovery of lost funds after transfer." In other words — once the money is gone, even the FBI may not be able to get it back.

The FTC followed with its own consumer alerts, including the September 2026 parking-meter warning and earlier guidance on QR scams generally. The commission's advice is practical rather than alarmist: inspect the previewed URL before tapping it, checking for misspellings or switched letters; keep your phone's operating system and apps updated; use strong passwords and multi-factor authentication; and if you think you scanned a bad code, do not engage with whoever is behind the site, change any password you entered (and everywhere you reused it), review your statements, and report it to the FTC's fraud reporting site.

Note the careful nuance in both agencies' guidance — because it matters for the verdict. Neither agency says QR codes themselves are evil or that you should never scan one. What they say is that the safety of scanning depends entirely on context and verification. That is precisely why the blanket claim "QR codes are safe to scan" fails: it treats every scan as equally safe, and the evidence shows they are not.

<picture>
<source srcset="/img/1526374965328-7f61d4dc18c5-1000.avif" type="image/avif">
<source srcset="/img/1526374965328-7f61d4dc18c5-700.webp" type="image/webp">
<img src="/img/1526374965328-7f61d4dc18c5-700.webp" alt="Green computer code cascading down a dark screen, evoking hacking and malware imagery" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Code cascading on a dark screen. Modern quishing campaigns use tricks like fragmented QR images and ASCII-art codes to slip past email security filters.*

## Why your phone cannot save you automatically

One reason the "safe to scan" myth persists is a reasonable-sounding assumption: surely, in 2026, our devices and security software would catch something this simple. The uncomfortable truth is that the QR code's design makes it unusually hard to defend against — harder than an ordinary phishing link, in several specific ways.

First, the destination is invisible by design. A suspicious link in an email at least shows you its text; a cautious user can hover over it, read the domain, and spot the misspelling. A QR code shows you nothing. You must scan it to learn where it goes, and by the time you see the destination, you have already committed the act of scanning. The only defense is the URL preview your phone's camera shows before you tap — and only if you actually read it.

Second, QR codes defeat the filters that protect your inbox. Email security gateways are built to inspect text: they follow links, check domains against blocklists, and flag known-bad URLs. A QR code encodes its malicious URL inside an image, which many legacy filters simply do not decode and inspect. Researchers found that QR code use as a phishing payload rose from under 1 percent of phishing in 2021 precisely because it sailed through defenses tuned for the old kind of attack. Many security vendors added QR-scanning capabilities to their products in late 2024 — but the feature often requires manual activation, and countless organizations never turned it on.

Third, quishing moves the victim off the protected device. In the corporate version of the attack, the malicious code arrives in an email on a managed work computer — a machine with enterprise antivirus, web filtering, and monitoring. The victim picks up their personal phone to scan it, stepping outside the company's entire security perimeter onto a device with fewer controls. Security analysts describe this "segregation of scanning activity from the company security infrastructure" as one of the main drivers of quishing's success.

Fourth, your phone's built-in scanner has no opinion about what it scans. The camera app faithfully decodes any code you point it at — legitimate or malicious — and offers to open whatever it finds. There is no reputation check, no warning banner, no "are you sure?" The FBI explicitly advises against downloading third-party QR scanner apps, noting that some are themselves malware, and recommends sticking with the built-in camera reader — but even the built-in reader is a dumb pipe. It shows you the link; the judgment call is yours.

## The important nuance: scanning is not the same as getting hacked

Before we deliver the verdict, honesty requires a nuance — because fact-checking cuts both ways, and the scaremongers deserve scrutiny too. Some viral warnings imply that the mere act of scanning a QR code can hack your phone, install a virus, or drain your bank account instantly. That is not how it works.

Simply pointing your camera at a QR code and seeing the URL preview is, by itself, essentially harmless. The danger begins with what you do next: tapping through to the site, typing in your password or card number, downloading the file, or installing the app. The FTC's own guidance reflects this: "Scanning alone, with nothing typed in, is usually harmless." The code is a doorway, not a weapon; walking through the doorway is where the risk lives.

This matters because it tells you exactly where the real defense sits. You do not need to fear QR codes as objects. You need to treat every QR code as an unverified claim about a destination — one that deserves a few seconds of scrutiny before you act on it. That distinction is also why the security advice from the FTC and FBI focuses on behavior after the scan: preview the link, verify the source, never enter credentials or payment details on a page you reached through a code unless you have confirmed the address, and when in doubt, navigate to the site manually instead.

<picture>
<source srcset="/img/1518770660439-4636190af475-1000.avif" type="image/avif">
<source srcset="/img/1518770660439-4636190af475-700.webp" type="image/webp">
<img src="/img/1518770660439-4636190af475-700.webp" alt="Close-up of a computer circuit board with electronic components" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Close-up of a circuit board. Quishing does not exploit hardware flaws — it exploits the gap between what technology can verify and what humans bother to check.*

## How to scan safely: the five-second habit

The good news is that defending yourself against quishing does not require expertise, software, or money. It requires a habit that takes about five seconds. Here is the distilled advice from the FTC, the FBI, and cybersecurity researchers:

**1. Preview the link — and actually read it.** Every modern phone shows the destination URL before opening it. Stop and read it. Is it the domain you expect? Watch for misspellings, swapped letters, extra words, or a domain that has nothing to do with the company you think you are dealing with. This single step defeats most quishing attempts.

**2. Inspect physical codes for tampering.** Feel for a raised edge, a lifting corner, a square of glossy sticker on a dull printed sign, or a code that does not quite line up with the printing around it. If it peels, it is not the original. When possible, pay through the official app or website instead of scanning a code on a meter or sign.

**3. Never enter passwords or card details on a QR-reached page you have not verified.** This is the FBI's core rule. If a scanned code leads to a login or payment page, close it and navigate to the site manually by typing the address you know — or use the company's official app. Legitimate organizations almost never require you to scan a QR code in an unexpected email or text to make a payment.

**4. Do not download apps from QR codes — or QR scanner apps.** Use your phone's app store for downloads; the FBI warns that some third-party scanner apps are malware themselves, and your camera already has a perfectly good reader built in.

**5. Verify unexpected codes with the sender.** If a QR code arrives in a message you did not expect — especially one demanding urgent action — contact the company through a phone number or website you already know, not through any contact details in the message. Urgency is the scammer's favorite tool; your best defense is to slow down.

And if you believe you already scanned a bad one: do not contact anyone through the suspicious site, change any password you entered (and everywhere you reused it), call your bank using the number on the back of your card if you entered payment details, watch your statements for a few weeks, and report it to the FTC at ReportFraud.ftc.gov or to the FBI's Internet Crime Complaint Center.

## The Verdict

**Verdict: False.** The claim that QR codes are safe to scan does not survive contact with the evidence.

The technology itself is neutral — a pattern of squares holding a string of data. But in practice, "just scan it" is exactly the behavior criminals are counting on. The FBI warned in 2022 that cybercriminals were tampering with QR codes to redirect victims to malicious sites that steal login and financial information. The FTC warned in September 2026 that scammers were pasting fake codes over real ones on parking meters. Independent researchers measure QR-code phishing growing from under 1 percent of all phishing in 2021 to 12 percent in 2025, with hundreds of thousands of malicious QR emails detected in single quarters and millions of victims' pounds, dollars, and credentials lost.

The claim fails not because every QR code is dangerous — the menu code at your local restaurant is almost certainly fine — but because the claim is absolute, and absolutes are where scams hide. A QR code is safe to scan only when you know its source, you have checked for tampering, you have previewed and verified the destination, and you treat anything it asks for with suspicion. In other words: the code is never the proof of safety. You are.

<picture>
<source srcset="/img/1594663653925-365bcbf7ef86-1000.avif" type="image/avif">
<source srcset="/img/1594663653925-365bcbf7ef86-700.webp" type="image/webp">
<img src="/img/1594663653925-365bcbf7ef86-700.webp" alt="A hand holding a smartphone showing a web page, illustrating the habit of verifying a link before tapping" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*A smartphone displaying a web page. The five-second habit that defeats quishing is unglamorous: read the previewed link before you tap it.*

## The kicker

Here is the irony at the heart of quishing: the QR code became popular because it removed friction — no typing, no searching, no thinking. And the scam works because it removes friction too — no verification, no hesitation, no second look. The criminals are not exploiting a bug in your phone. They are exploiting a feature of your brain: the tendency to trust what looks official and act on what feels urgent.

So the next time a little black-and-white square asks for your trust, give it the one thing it cannot fake — five seconds of your attention. Preview the link. Check the sticker. Type the address yourself. The scammers have printers, patience, and very convincing fake websites. All you need is a pause.
