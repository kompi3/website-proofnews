---
title: "Can AirTags Track You Without You Knowing? The 40,000 Reports Behind the Answer"
description: "Can AirTags track you without you knowing? The evidence says yes — Apple's own records cited in court show more than 40,000 unwanted-tracking reports in three years, and independent researchers found the alerts meant to warn you are slow and unreliable, especially on Android."
pubDate: 2026-11-16
category: 'Technology'
verdict: 'Mostly True'
---

It started, for a lot of people, with a notification they did not understand. A woman in the United States found one on her phone after a night out: an unknown AirTag had been moving with her for hours. A man in the United Kingdom discovered a tracker hidden in the wheel well of his car only after his phone finally warned him. In court filings across America, the stories repeat with grim regularity — a device the size of a coin, slipped into a bag, a coat pocket, a child's backpack, quietly reporting its owner's movements to someone else's phone. Apple built the AirTag to find lost keys. Within months of its launch, it had become something else in the public imagination: the perfect stalking tool, cheap, silent, and nearly invisible.

The question people type into search bars millions of times a year is simple and frightening: can AirTags track you without you knowing? It is the kind of question that deserves a careful answer, because both the reassuring version and the terrifying version are partly true. Yes, an AirTag can follow you without your knowledge — it has happened to thousands of people, and the paper trail proving it runs through Apple's own records, peer-reviewed security research, and a federal court docket that now holds dozens of lawsuits. And no, it is not invisible forever: Apple has built warning systems into every iPhone, and Google has built them into Android, and in many cases those warnings do eventually arrive. The honest answer sits between the two extremes, and the distance between them is measured in hours — hours during which a tracker can report your location while you have no idea it is there.

This is not a hypothetical risk debated by security researchers in the abstract. It is a documented pattern with numbers attached, and the numbers are large enough that a federal judge consolidated the lawsuits into a single multidistrict proceeding in October 2026. What follows is what the evidence actually shows: how the device works, what Apple did to stop misuse, why those protections keep falling short, and what you can do if you think a tracker is following you.

<picture>
<source srcset="/img/1518770660439-4636190af475-1000.avif" type="image/avif">
<source srcset="/img/1518770660439-4636190af475-700.webp" type="image/webp">
<img src="/img/1518770660439-4636190af475-700.webp" alt="A close-up of a computer circuit board, the kind of compact electronics inside a Bluetooth tracker" width="1000" height="563" fetchpriority="high" decoding="async">
</picture>

*Close-up of a circuit board — the compact electronics that make a coin-sized tracker possible.*

## The Claim

The claim, in its most common form, is a question asked in fear: can someone put an AirTag on you or in your car and follow your movements without you ever finding out? Versions of it circulate on social media, in parenting groups, in forums for people leaving abusive relationships, and in news reports every time a new stalking case reaches court. Some versions are more extreme, claiming AirTags are completely undetectable, or that Apple designed them for secret surveillance. Others go the opposite way, insisting the anti-stalking alerts make secret tracking impossible. Both extremes are wrong, and the truth matters more than usual here, because people making safety decisions for themselves and their children are relying on it.

To judge the claim fairly, it helps to separate it into three smaller questions. First, is it technically possible for an AirTag to report your location to someone else without you knowing? Second, has it actually happened — not once or twice, but as a pattern? And third, how long can it go on before the safeguards catch it? The first question is a matter of engineering. The second is a matter of records. The third is a matter of research. On all three, the evidence points the same way: yes, it can happen, it has happened repeatedly, and the warning often arrives far later than most people would assume.

## How an AirTag Actually Tracks You

An AirTag is not a GPS tracker in the way most people imagine one. It has no GPS receiver and no cellular radio. It cannot phone home on its own, and it cannot tell anyone where it is by itself. What it has is a Bluetooth radio, a small battery that lasts about a year, and a speaker. Every fifteen minutes or so, it broadcasts a rotating Bluetooth identifier — a short-range radio signal that changes regularly so the same device is harder to follow over time.

The tracking happens through everyone else's phones. Apple's Find My network includes more than a billion iPhones, iPads, and Macs around the world. When any of those devices passes within Bluetooth range of an AirTag — a stranger walking past on the street, a passenger sitting nearby on a train — it quietly picks up the signal and relays the location to Apple's servers, encrypted end to end. Only the AirTag's owner holds the key to decrypt it, so Apple itself says it cannot see where any individual AirTag is. The owner opens the Find My app and sees a dot on a map. That is the whole system, and it is remarkably effective: in a city, an AirTag is almost never more than a few metres from an Apple device that can report it.

This design is what makes the device so useful for finding lost luggage, and it is also what makes it so dangerous in the wrong hands. The person doing the tracking never has to stay near the victim. They can plant the device and go home. The victim's own city does the surveillance for them, one passing iPhone at a time. The AirTag itself stores no location data and no location history, which means that once it is found, there is no neat record inside it of everywhere it has been — the record lives in the owner's Find My app, not in the device.

The important detail for the claim is this: nothing about this process notifies the person being followed. The relaying phones do not alert their owners. The AirTag does not light up. The victim's phone stays silent unless one of Apple's anti-stalking systems decides that something is wrong — and that decision takes time, and specific conditions, and in some cases never comes at all.

## The Safeguards Apple Built

Apple did not ignore the stalking risk, and it is worth saying so plainly, because the company's response is part of the story. From the beginning, AirTags included features meant to prevent unwanted tracking, and Apple has tightened them repeatedly as the misuse became clear. The protections work on three levels: a phone notification, a sound from the device itself, and a way to identify the tracker once it is found.

The best-known safeguard is the notification. If an AirTag that is separated from its owner is seen moving with you over time, your iPhone is supposed to display an alert reading "AirTag Found Moving With You," along with a map showing where the device has been detected near you. The alert offers to play a sound on the AirTag so you can find it, and gives instructions for disabling it. This works on iPhones running iOS 14.5 or later, with no app to install. Tapping the notification can also show the AirTag's serial number, and holding a phone with NFC capability against the device reveals the serial number and the last four digits of the owner's phone number.

The second safeguard is the sound. An AirTag that has been separated from its owner for a period of time is designed to play a chirping sound when it is moved, so that even someone whose phone never alerts them has a chance of hearing it. Apple has shortened the window before the sound starts since launch, after early criticism that it waited too long.

The third layer arrived later, and it involved Apple's biggest rival. In May 2023, Apple and Google announced they were building a joint industry specification called Detecting Unwanted Location Trackers, so that the warning systems would work across both phone platforms. The specification was implemented in iOS 17.5 in May 2024 and on Android 6.0 and later, so an iPhone can now warn its owner about a tracker made for Android's network, and an Android phone can warn its owner about an AirTag. Google had already rolled out its own "Unknown tracker alerts" for Android in August 2023. Apple also released a standalone app, Tracker Detect, for Android users who want to scan manually, and independent researchers at TU Darmstadt built a free app called AirGuard for the same purpose.

On paper, this is a serious set of protections, built by two of the largest technology companies in the world, refined over five years. The problem is that the evidence shows they do not work as reliably as the paper promises — and the gap between the promise and the performance is where the claim lives.

<picture>
<source srcset="/img/1550751827-4bd374c3f58b-1000.avif" type="image/avif">
<source srcset="/img/1550751827-4bd374c3f58b-700.webp" type="image/webp">
<img src="/img/1550751827-4bd374c3f58b-700.webp" alt="A glowing padlock symbol representing digital security and privacy protection" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*A glowing padlock — the symbol of the privacy protections that are supposed to stop tracker misuse.*

## What the Numbers Say: 40,000 Reports

The single most important number in this story comes not from Apple, and not from a journalist, but from Apple's own internal records as cited in court. According to the lawsuits, Apple received more than 40,000 reports of unwanted AirTag tracking between April 2021 and April 2024 — the first three years the product was on sale. That works out to more than 1,000 reports a month, every month, for three years. These are reports made to Apple itself, not police statistics or survey estimates, and they were disclosed in the litigation filings that the lawsuits are built on.

It is important to be precise about what the number means and what it does not. Forty thousand reports is not the same as forty thousand confirmed stalking cases. Some reports may have been false alarms — a borrowed bag, a family member's tracker, a device that triggered an alert by accident. Apple has also argued that the reports include duplicates and cases where the tracking was not malicious. But even with generous allowances for error, the scale of the number is difficult to explain away as a series of misunderstandings. A product that generated a thousand unwanted-tracking complaints a month for three straight years has a misuse problem that no amount of careful wording can shrink into a footnote.

The number also has to be read alongside the pattern it sits inside. The federal class action that first brought these reports to light, Hughes v. Apple, was filed in December 2022 in San Francisco. It alleged that AirTags had become, in the words quoted in the complaint and repeated in coverage of the case, "the weapon of choice of stalkers and abusers." The lawsuit described devices hidden in bags, in car wheel wells, and in children's backpacks. In March 2026, a judge denied class certification, ruling that each woman's experience was too individual to proceed as a single class action — a procedural decision about how the cases should be tried, not a finding that the tracking did not happen. The individual lawsuits kept coming, and on October 2, 2026, the Judicial Panel on Multidistrict Litigation consolidated 17 federal AirTag stalking lawsuits into a single proceeding, MDL No. 3199, in the Northern District of California, identifying 12 more related cases that could join. Apple opposed the consolidation. The panel noted that Apple had settled 20 individual cases in the two months before the MDL was formed.

One of the individual cases filed in 2026 shows how serious the allegations have become. On September 23, 2026, a woman in Oregon filed a federal lawsuit alleging that AirTags were used to track her to a confidential domestic violence shelter — the kind of location whose secrecy is, for its residents, a matter of physical safety. The allegation has not been proven in court, and it should be reported as an allegation, not a finding. But the fact that such a case exists at all, and that it sits alongside dozens of others, is part of the evidence for the claim. Secret tracking with an AirTag is not a theoretical vulnerability discussed at security conferences. It is the subject of active federal litigation, and the defendants' own records show tens of thousands of complaints.

The picture is similar outside the United States. In England and Wales, The Independent reported that stalking cases involving AirTags and GPS trackers rose from 57 in 2018 to 568 by the end of 2024 — an increase of about 896 per cent. In coercive control cases, the number rose from 38 to 431 over the same period, an increase of more than 1,000 per cent. Those figures cover GPS trackers generally, not AirTags alone, and the rise partly reflects better reporting and wider awareness. But the direction is unmistakable, and it matches the American pattern: as the devices became cheap and common, their misuse grew with them.

## What the Research Found: Alerts That Arrive Late, or Not at All

Court filings and complaint counts establish that secret tracking happens. Independent research establishes why it keeps happening despite the safeguards — and the findings are uncomfortable. The most thorough study to date was presented at the USENIX Security Symposium in 2025 by researchers from the CISPA Helmholtz Center for Information Security and Saarland University, under the title "AirTag-Facilitated Stalking Protection: Evaluating Unwanted Tracking Notifications and Tracker Locating Features." The team ran two studies: one with 50 fully informed participants who carried an AirTag for two days or until they received an unwanted-tracking alert, and a second deception study with 19 participants to see how people react to an unexpected alert.

Their conclusion was blunt. Unwanted tracking notifications were significantly more reliable and timely on iPhones than on Android phones. The gap was not small, and it was not a matter of a few minutes. A summary of the study reported that only 14 of the 25 Android test participants received a tracking notification at all under controlled conditions. On iOS, alerts were far more consistent. The researchers also found that the alerts themselves were a problem: many participants disregarded the unobtrusive warning entirely, and the Find My app's interface made locating the hidden tracker harder than it needed to be. Effective responses, the researchers found, depended heavily on whether the person already knew about the technology or about technology-facilitated abuse — which is another way of saying the system protects the people who least need protecting.

An earlier study, "Track You: A Deep Dive into Safety Alerts for Apple AirTags," reached a similar conclusion from a different angle. It found that although AirTags offer proactive safety alerts, the delay of more than eight hours before those alerts fired was a significant concern, because it undermined the victim's ability to respond promptly to a potential threat. Eight hours is a long time for a tracker to report your movements. It is long enough to learn where you live, where you work, and where you go at night. And it was not even the worst figure reported: The New York Times reported that victims commonly waited up to 12 hours before being warned.

There are also gaps the research does not need to measure, because they follow directly from how the system is designed. The iPhone alert only fires when an AirTag separated from its owner travels with you over time. If the person tracking you is nearby — a partner in the same house, a colleague in the same office — the AirTag is not separated from its owner in the way the system checks for, and no alert is triggered. The alert also depends on settings that can be switched off, deliberately or by accident: Location Services, Bluetooth, and Tracking Notifications all have to be on, and Airplane Mode has to be off. A phone in a dead zone, a phone with a dead battery, or a phone running an older version of iOS may never warn its owner at all. And the sound alert, which is supposed to be the backstop for people whose phones stay silent, can be defeated by opening the device and removing or muffling the speaker — a modification that instructions for are widely available online, and that leaves no visible trace from the outside.

None of this means the safeguards are useless. On an up-to-date iPhone, with all the right settings on, an unknown AirTag travelling with its owner will usually be detected eventually, and the notification does arrive for many people in time to matter. The research does not show a system that never works. It shows a system that works slowly, unevenly, and with blind spots that a determined person can exploit — which is a very different thing from the promise that secret tracking is impossible.

<picture>
<source srcset="/img/1594663653925-365bcbf7ef86-1000.avif" type="image/avif">
<source srcset="/img/1594663653925-365bcbf7ef86-700.webp" type="image/webp">
<img src="/img/1594663653925-365bcbf7ef86-700.webp" alt="A hand holding a smartphone showing search results, the screen where an unwanted-tracking alert would appear" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*A phone in hand — the screen where an "AirTag Found Moving With You" alert is supposed to appear, sometimes hours late.*

## When the Alerts Don't Help

It is worth walking through the situations where the protections fail, because they are not exotic edge cases. They are ordinary circumstances that describe millions of people.

The first is the simplest: the tracker is used by someone close to you. Apple's system is designed around the idea of a stranger planting a device and walking away. But much of the documented misuse involves people the victim knows — an ex-partner, a family member, someone in the same household. In those cases the AirTag often stays within Bluetooth range of its owner's phone, at least some of the time, and the separation logic that triggers the alert may never engage. The victim can be tracked for days by a device sitting in the same house as the person tracking them, with no warning at all.

The second is the Android gap. Android phones only began receiving automatic unknown-tracker alerts in August 2023, more than two years after the AirTag launched, and the research shows the alerts are far less reliable than on iOS. In the 2025 USENIX study, nearly half of Android participants never received a notification in a controlled test. For the billions of people who use Android phones, the protection Apple advertises is, in practice, a weaker one — and many of them do not know that.

The third is the time gap. Even when everything works as designed, the alert does not arrive immediately. It arrives after the AirTag has been travelling with you "over time," and the research puts that delay at eight hours or more. During those hours the tracker is doing exactly what it was planted to do, and the victim has no way of knowing. A person who plants a tracker on a Friday evening can know where their victim spends the weekend before any phone raises the alarm.

The fourth is the settings gap. The protection only works if the victim's phone is configured for it. Location Services must be on, Bluetooth must be on, Tracking Notifications must be allowed, and the phone must not be in Airplane Mode. None of those settings is guaranteed. A phone with Bluetooth switched off to save battery, a phone in a low-power state, or a phone belonging to someone who dismissed a permissions prompt months ago may stay silent indefinitely. Apple's own support pages list these requirements openly, which is honest — and also an admission that the safety net has holes a victim cannot see.

The fifth is the modified device. The sound alert is the last line of defence for someone whose phone never warns them, and it can be silenced. Modified AirTags with the speaker removed have been sold online, and guides for removing the speaker circulate freely. A tracker with no speaker is a tracker that can sit in a car for weeks without ever making a sound, relying entirely on phone notifications that may arrive late or not at all.

Add these together and the picture is clear. Secret tracking with an AirTag is not a matter of a single flaw that Apple overlooked. It is a matter of a system whose protections are slow, conditional, platform-dependent, and defeasible — and of a device so cheap and so small that the barrier to trying is almost nonexistent. An AirTag costs $29. That price is part of the story too. The older GPS trackers used for stalking were expensive, bulky, and needed a subscription. The AirTag made covert tracking affordable for anyone, and the scale of the misuse followed the price.

<picture>
<source srcset="/img/1512941937669-90a1b58e7e9c-1000.avif" type="image/avif">
<source srcset="/img/1512941937669-90a1b58e7e9c-700.webp" type="image/webp">
<img src="/img/1512941937669-90a1b58e7e9c-700.webp" alt="A smartphone home screen full of app icons, where tracking alerts compete for attention with everything else" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*A phone's home screen — where a tracking alert is one notification among dozens, easy to dismiss or miss entirely.*

## The Bigger Pattern: Your Devices Are Watching, Too

AirTags are not the only everyday device that can follow you without your knowledge, and the same logic that makes them dangerous applies to the rest of the technology in your pocket and your living room. The question of whether your devices are watching you has become one of the most-searched privacy questions of the decade, and the answers are rarely simple. Our earlier fact-check on <a href="/blog/is-your-phone-listening-to-you-fact-check/">Is Your Phone Secretly Listening to You for Ads? What the Evidence Actually Shows</a> found that phones are not secretly recording your conversations for advertisers — but the apps on them collect far more location and behaviour data than most owners realise, and they do it with permission buried in settings screens nobody reads.

The same pattern shows up in the living room. Our fact-check on <a href="/blog/smart-tv-spying-on-you-fact-check/">Is Your Smart TV Really Spying on You?</a> found that modern televisions track what you watch and share that data with advertisers by default, and that the opt-outs are hidden several menus deep. And the physical world has its own traps: <a href="/blog/public-usb-charging-juice-jacking-myth-fact-check/">Is 'Juice Jacking' Real? The Airport USB Warning With Zero Confirmed Victims</a> examined whether a charging cable in an airport or a cafe could steal data from your phone — a claim that turned out to be technically possible but rare in practice, the mirror image of the AirTag story, where the danger is real and common rather than theoretical.

What connects these cases is a design philosophy that treats privacy as something users must actively defend, through settings and vigilance, rather than something protected by default. An AirTag will warn you about unwanted tracking only if your phone is configured correctly, updated, charged, and in range of a network. A smart TV will stop tracking you only if you find the setting. A public charging port is safe only if you bring your own adapter. In each case, the burden falls on the person at risk, and the people most at risk — those being stalked, those without technical knowledge, those who cannot afford a new phone — are the least able to carry it.

## The Verdict

Can AirTags track you without you knowing? The evidence says yes — not as a hypothetical, and not as a rare exception, but as a documented pattern confirmed by Apple's own records, by independent security research, and by a federal court docket. Apple's internal records cited in litigation show more than 40,000 unwanted-tracking reports in the product's first three years. Peer-reviewed research found that the alerts meant to warn you are slow, arriving after eight hours or more, and unreliable, particularly on Android, where nearly half of test participants never received a notification at all. Dozens of lawsuits, now consolidated into a federal multidistrict proceeding, describe devices hidden in bags, cars, and children's backpacks. The claim, in its straightforward form, is true.

It is not the whole story, and the verdict is Mostly True rather than True for a reason. The word "without you knowing" suggests something permanent and undetectable, and that overstates the case. For an iPhone user with current software and the right settings switched on, an unknown AirTag travelling with them will usually trigger a notification eventually, and the device will eventually make a sound. The tracker is not invisible forever, and it is not undetectable by design — Apple built real protections into it, and has improved them repeatedly, including the joint standard built with Google. People who say "your iPhone will always warn you" are wrong, but so are people who say "an AirTag can follow you forever and you will never know." The first claim understates the danger. The second overstates it. Between them lies the truth the evidence supports: secret tracking with an AirTag is real, it is common, it can go on for hours or days before any warning appears, and in some circumstances — a tracker planted by someone nearby, a victim using Android, a silenced device — it can go on far longer than that.

That is why the practical advice matters more than the verdict label. If you receive an "AirTag Found Moving With You" alert, or a "Tracker traveling with you" alert on Android, do not ignore it. Tap it, view the map of where the device was detected, play the sound, and look for the device in the places the map suggests — bags, pockets, car wheel wells, under seats. If you find an unfamiliar AirTag, you can disable it by removing its battery, and you can hold an NFC-capable phone against it to see its serial number and the last four digits of the owner's phone number, which is information the police can use. Take a screenshot of the alert and the map before it disappears — tracking alerts are deleted after 48 hours. And if you feel unsafe, contact the police rather than confronting whoever you suspect planted it. Tracking someone without consent is a crime in many countries, and law enforcement can request information from Apple to support an investigation.

For everyone else, the lesson is simpler and worth remembering the next time a small, cheap, clever device goes on sale: the question is never only whether a product can be misused, but how quickly the misuse will be found, and who pays the price while it is not. With AirTags, the answer to that question took three years, forty thousand reports, and a federal court case to establish. The alerts exist. They arrive late. And for the people they are meant to protect, late can be too late.

| What the claim says | What the evidence shows |
|---|---|
| AirTags can track you secretly | True — documented in 40,000+ reports to Apple (Apr 2021–Apr 2024) and dozens of federal lawsuits |
| You will never find out | Overstated — iPhone alerts usually arrive eventually, and the device plays a sound after separation |
| The alerts protect everyone | False — USENIX 2025 study: only 14 of 25 Android participants received a notification; iOS far more reliable |
| The warning comes quickly | False — researchers measured delays of 8+ hours; The New York Times reported waits of up to 12 hours |
| Apple did nothing about it | False — alerts (iOS 14.5), sound alerts, Android detection, and the joint Apple–Google DULT standard (iOS 17.5, May 2024) |
| Only strangers plant trackers | False — many documented cases involve someone the victim knows; nearby owners can avoid triggering alerts |

## A Short Timeline of the AirTag Safety Story

| Date | What happened |
|---|---|
| April 2021 | Apple launches the AirTag ($29) with anti-stalking alerts and a separation sound |
| December 2022 | Hughes v. Apple class action filed in San Francisco, calling AirTags the "weapon of choice of stalkers and abusers" |
| August 2023 | Google rolls out Unknown Tracker Alerts for Android; researchers report alert delays of 8+ hours |
| April 2021–April 2024 | Apple receives 40,000+ unwanted-tracking reports, later disclosed in litigation filings citing internal documents |
| May 2024 | Apple–Google DULT standard launches in iOS 17.5, extending cross-platform tracking alerts |
| 2025 | USENIX Security study finds iOS alerts far more reliable than Android; only 14 of 25 Android participants notified |
| March 2026 | Judge denies class certification in Hughes v. Apple; individual lawsuits continue |
| September 2026 | Oregon woman sues, alleging AirTags tracked her to a confidential domestic violence shelter |
| October 2026 | 17 federal lawsuits consolidated into MDL No. 3199; Apple settles 20 cases in the preceding two months |

<picture>
<source srcset="/img/1554224155-6726b3ff858f-1000.avif" type="image/avif">
<source srcset="/img/1554224155-6726b3ff858f-700.webp" type="image/webp">
<img src="/img/1554224155-6726b3ff858f-700.webp" alt="Paperwork, receipts and a calculator, representing the court records and complaint counts behind the AirTag lawsuits" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*Paperwork and records — the court filings and complaint counts that turned a gadget story into a federal case.*

## Sources

- [Apple Support: What to do if you get an alert that an AirTag is with you](https://support.apple.com/en-lk/119874)
- [Apple Newsroom: Apple and Google deliver support for unwanted tracking alerts in iOS and Android](https://www.apple.com/lv/newsroom/2024/05/apple-and-google-deliver-support-for-unwanted-tracking-alerts-in-ios-and-android/)
- [USENIX Security '25: AirTag-Facilitated Stalking Protection — Gerhardt et al., CISPA](https://www.usenix.org/conference/usenixsecurity25/presentation/gerhardt)
- [LegalScoops: AirTag Stalking Lawsuits Become Federal MDL 3199](https://www.legalscoops.com/apple-airtag-stalking-lawsuit-mdl/)
