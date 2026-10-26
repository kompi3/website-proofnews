---
title: "No, Incognito Mode Doesn't Make You Anonymous — What Private Browsing Really Hides"
description: "No, incognito mode does not make you anonymous: it only stops your own browser from saving history on your device, while your provider, employer, and the websites you visit can still see what you do. A $5 billion lawsuit showed even Google collected data in private mode."
pubDate: 2026-10-26
category: 'Technology'
verdict: 'False'
---

Open a private window, and the whole mood of the internet changes. The browser turns dark. A little icon of a hat and glasses appears, or a mask, depending on your browser. The screen promises, in one reassuring word, privacy. It is easy to believe that you have just stepped off the grid — that from this moment on, nobody can see where you go online.

That belief is one of the most widely shared misunderstandings in modern technology, and it has real consequences. People use private browsing to look up medical symptoms, to shop for gifts they want to keep secret, to visit websites at work they would rather not explain, and sometimes to do things they would never do in a normal window. They do all of this under the impression that they are invisible. They are not. Incognito mode, and every version of private browsing like it, hides your activity from exactly one audience: other people who later pick up the same device. It hides nothing from your internet provider, your employer, the websites you visit, or the companies whose tracking tools run on those websites. The claim that incognito mode makes you anonymous is false, and the evidence for that verdict is unusually clear — it comes from the browser makers themselves, from academic researchers, and from a federal lawsuit that Google settled only after agreeing to delete billions of data records.

## Where the myth started

Google launched Incognito Mode in Chrome in 2008, and the idea spread quickly to every major browser. Firefox called it Private Browsing. Microsoft Edge called it InPrivate. Safari called it a Private Window. The names all pointed in the same direction: this is the mode for things you do not want seen.

The feature was built for a world that looks very different from today's. In 2008, families commonly shared a single desktop computer in a living room. A teenager researching a surprise birthday present, or an adult checking a bank balance on a hotel computer, had a genuine problem: the browser would remember everything, and the next person to sit down could retrace it all. Private browsing solved that specific problem neatly. Open the private window, do your business, close it, and the browser throws away the history, the cookies, the cached files, and the form entries from that session. The next person to use the computer finds nothing.

That is still what the feature does, and it does it well. The trouble began when the name outgrew the function. "Private" and "incognito" are words that promise far more than local cleanup. Over time, as personal devices replaced shared ones, the original use case faded while the promise lingered. Researchers at the University of Chicago and Leibniz University Hannover decided to test exactly how far the misunderstanding went, and the results were striking.

## What the research found

In a study presented at the 2018 World Wide Web Conference, researchers showed 460 volunteers a fictional browser with private browsing modes taken from real browsers, then asked them what they believed private mode would and would not protect. The gap between belief and reality was wide. More than half of participants — 56.3 percent — thought that if they logged into a Google account in a private window, Google would not save their searches to the account's history. That is wrong: signing into an account in a private window records your activity to that account just as it would in a normal window. About a quarter of participants, 25.2 percent, believed private browsing would hide their device's IP address, the number that identifies your connection and can be used to approximate your location. It does not. More than 40 percent thought private mode would stop websites from tracking their location, and 27.1 percent believed it offered better protection against viruses and malware. It offers no such protection at all.

The study's central finding was simple: people consistently mistook the local protections of private mode — what is stored on their own computer — for protection against the outside world. Blase Ur, one of the study's authors at the University of Chicago, pointed out that browser makers had made the confusion worse with vague, sweeping language. Opera promised users that "your secrets are safe." Firefox encouraged users to "browse like no one's watching." In fact, as the researchers noted, someone might well be watching.

A Pew Research Center survey in 2019 found the same confusion at national scale. Only 24 percent of American adults knew that private browsing or incognito mode can only hide browsing history from other users of the same device, and not from websites, internet providers, or employers. Nearly half — 49 percent — admitted they were unsure what private browsing actually does. This is not a fringe misunderstanding held by a careless few. It is the majority position, held by ordinary people doing ordinary things online.

## What incognito mode actually hides

Strip away the branding, and private browsing does a short, specific list of things. When you close the private window, the browser discards your browsing history from that session, so it will not appear in your history list or autocomplete suggestions. It deletes the cookies and site data collected during the session, so websites will not remember you from that session the next time you visit in a normal window. It does not save form entries, passwords you typed, or cached images and files from the session. Extensions are switched off by default in private mode, which is a deliberate privacy choice: an extension that can read page content would otherwise see exactly the browsing you chose to keep private.

That list is the whole feature. Everything else about your connection works exactly as it does in a normal window. Your internet service provider still sees the domains you connect to, because your traffic still travels through its network. If you are on a work or school network, the network administrator can still log your traffic. The websites you visit still receive your IP address. If you download a file, it stays on your computer; only the record of the download disappears from the browser's list. If you create a bookmark in a private window, it is saved permanently, just like any other bookmark.

None of this is hidden fine print, either. Chrome's own incognito start page has always warned that your activity "might still be visible to websites you visit, your employer or school, or your internet service provider." The warning was there from the beginning. But as one technology commentator put it, the marketing copy said "private," the window turned dark, and the message was clear — you are hidden now. Almost nobody reads the disclaimer.

<picture>
<source srcset="/img/1576091160550-2173dba999ef-1000.avif" type="image/avif">
<source srcset="/img/1576091160550-2173dba999ef-700.webp" type="image/webp">
<img src="/img/1576091160550-2173dba999ef-700.webp" alt="A laptop on a desk showing a video call, a reminder that private browsing only changes what is saved on the device itself" width="1000" height="563" fetchpriority="high" decoding="async">
</picture>

*Private browsing changes what your own device remembers. It does not change what the network sees. Image: Unsplash.*

## Who can still see you

The list of watchers that incognito mode does not stop is long, and each one sees you in a different way.

Your internet service provider is first. Every request your browser makes travels through your provider's network, and the provider can log the domains you visit. Incognito mode does not encrypt your traffic or reroute it; it only changes what your browser stores afterwards. Switching to a private window before visiting a website is, from your provider's point of view, no different from visiting it in a normal window.

Your employer or school comes second, and this is where the misunderstanding can cost people their jobs. On a company or school network, administrators can monitor traffic logs regardless of browser settings. If you are using a device managed by your employer, monitoring software installed on the device can see your activity no matter which mode you use. Incognito mode does not bypass content filtering, either: if a website is blocked on your network, it stays blocked in a private window. Workers who assume a private window shields them from workplace monitoring are relying on a protection that was never built.

The websites you visit come third. A website in a private window still sees your IP address, your browser type, your screen size, your operating system, your time zone, and your installed fonts — a combination of details that can be used to build a digital fingerprint identifying your device even without cookies. Fingerprinting works precisely because it does not need to store anything on your device, which makes it invisible to the cleanup that private browsing performs. Studies have found fingerprinting scripts on a large share of popular websites, and they work just as well in a private window as in a normal one.

Then there are the companies behind the tracking tools embedded in those websites. When you visit a page that runs Google Analytics or advertising technology, those tools can record your visit during the private session and correlate it with other data, for example by matching your IP address. This is not a theoretical risk. It is exactly what a federal class-action lawsuit accused Google of doing, and the case produced one of the clearest public reckonings about private browsing ever written.

## The $5 billion lawsuit

In June 2020, Chrome users filed a class-action lawsuit in federal court in California alleging that Google misled users by tracking their activity in Incognito mode. The plaintiffs said Google violated federal wiretap laws by collecting information through tools like Google Analytics even when users had switched to private mode, building what they called an "unaccountable trove of information" about people who believed they had taken steps to protect their privacy. The lawsuit sought at least $5 billion in damages.

Google tried to get the case dismissed, pointing to the incognito disclaimer that warned users their activity might still be visible to websites, employers, and providers. But the judge, U.S. District Judge Yvonne Gonzalez Rogers, refused to accept that the disclaimer amounted to consent. As she put it, Google's argument hinged on the idea that plaintiffs had consented to data collection in private mode, but because Google never explicitly told users that it collected their data in private mode, the court could not find that users had consented as a matter of law.

Google agreed to settle the case in December 2023, and the settlement was finalized in April 2024. The terms were striking. Google agreed to delete or remediate billions of data records reflecting private browsing activities. It agreed to rewrite its disclosures to fully inform users that it collects private browsing data. It agreed to limit the data it collects in private mode for the next five years, including allowing incognito users to block third-party cookies by default. The settlement paid no cash damages to users — plaintiffs' lawyers valued the injunctive relief at more than $5 billion, and individual users retained the right to sue for damages on their own — but the message was unmistakable. The company whose browser invented the feature acknowledged, in a court-approved settlement, that private browsing had never meant what millions of users thought it meant.

Google's own statement at the time drew a careful line. A spokesperson said the company was happy to delete "old technical data that was never associated with an individual and was never used for any form of personalisation." Critics, including plaintiffs' lawyer David Boies, called the settlement a historic step in requiring honesty from dominant technology companies. Whichever framing you prefer, the practical lesson for users is the same: even the company that built incognito mode was collecting data during incognito sessions, and it took a four-year federal lawsuit to force clearer warnings about it.

<picture>
<source srcset="/img/1511707171634-5f897ff02aa9-1000.avif" type="image/avif">
<source srcset="/img/1511707171634-5f897ff02aa9-700.webp" type="image/webp">
<img src="/img/1511707171634-5f897ff02aa9-700.webp" alt="A hand holding a smartphone, the device on which most private browsing now happens" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*Most private browsing today happens on personal phones, not shared computers — the opposite of the situation the feature was designed for. Image: Unsplash.*

## The logged-in trap

The single most common way private browsing fails people is also the simplest: they sign into an account. Private mode starts you signed out of everything, which is why it is genuinely useful for checking how a website looks to a logged-out visitor. But the moment you log into Google, Facebook, Amazon, or any other account inside a private window, that account records your activity normally. Your searches land in your Google account history. Your videos land in your watch history. Your purchases are tied to your account. The browser forgets the session when you close the window; the account does not.

This is the trap that caught 56.3 percent of the participants in the University of Chicago study, and it is easy to see why. The dark window feels like a fresh start, a clean room. But an account is not part of the browser's local storage. It lives on a company's servers, and private mode has no power over it. If you want to test this yourself, sign into your Google account in a private window, run a search, close the window, and then check your account's search history in a normal window. The search will be there. That experiment alone dismantles the anonymity claim.

The same logic applies to anything you do after signing in anywhere. A private window does not launder your identity. It only postpones the browser's memory of it.

## What incognito mode is actually good for

None of this means private browsing is useless. It is a genuinely handy tool, as long as you use it for what it was built to do.

It is the fastest way to stop a shared or borrowed device from remembering you. Checking email on a hotel computer, booking travel on a public terminal, or shopping for a surprise gift on a family laptop are all legitimate uses: when you close the window, the next person finds no trace of your session in the browser.

It is also useful for troubleshooting and testing. Because a private window starts with no cookies and no extensions, it shows you a website the way a first-time visitor sees it. Web developers use it constantly for exactly this reason. It lets you log into a second account without logging out of the first, since the private window runs a separate, temporary session. And it can help you see prices or content without the personalization that your normal cookies would trigger, though websites can still personalize based on your IP address and fingerprint.

What it cannot do is protect you from surveillance, hide your identity, bypass network restrictions, or keep you safe from malware. A private window will not stop a phishing site from stealing your password, will not encrypt your connection, and will not protect a downloaded file from being malicious. Anyone who needs real anonymity needs different tools entirely.

## What actually protects you, and what does not

If your goal is to hide your browsing from your internet provider, a virtual private network (VPN) does what incognito mode only pretends to do: it encrypts your traffic and routes it through the VPN provider's servers, so your provider sees only an encrypted connection to the VPN, not the websites you visit. But that protection has its own limits, and they matter. A VPN shifts your trust from your provider to the VPN company, which can now see your traffic instead. On a work device or work network, a personal VPN may not help at all if monitoring software is installed on the device itself. And a VPN does nothing about the tracking that happens after you log into an account: Google still knows it is you, because you told it so by signing in.

The Tor Browser goes further, routing traffic through multiple volunteer-run relays so that no single party can link you to the websites you visit. It is the closest thing ordinary users have to real online anonymity. But it is slower, some websites block it, and even Tor cannot protect you if you log into a personal account and announce who you are.

For most people, the realistic privacy toolkit is less dramatic: use a reputable browser with tracking protection switched on, block third-party cookies, keep your software updated, use a password manager and two-factor authentication, and assume that anything you do while signed into an account is recorded by that account. Those habits protect you more than any dark window ever will. The same caution applies beyond the browser: a private window is no more protection against a compromised network than an ordinary one, just as public Wi-Fi carries risks that no browser mode can erase. We have previously examined how [smart TVs can quietly watch their owners](/blog/smart-tv-spying-on-you-fact-check/) and how [public USB charging ports can be abused](/blog/public-usb-charging-juice-jacking-myth-fact-check/) — in both cases, the device and the network, not the browser window, were the weak point. And if your password habits need attention too, the old rule about [changing your password every 90 days](/blog/change-password-every-90-days-fact-check/) turns out to be another piece of security advice worth re-examining.

<picture>
<source srcset="/img/1518770660439-4636190af475-1000.avif" type="image/avif">
<source srcset="/img/1518770660439-4636190af475-700.webp" type="image/webp">
<img src="/img/1518770660439-4636190af475-700.webp" alt="Close-up of a green circuit board with electronic components, representing the tracking technology that runs invisibly behind websites" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*Analytics and advertising tools embedded in websites keep working in private mode — they run on the website's servers, not in your browser's history. Image: Unsplash.*

## Why the wording matters

It is tempting to blame users for not reading disclaimers. But the researchers who studied this problem reached a different conclusion: the confusion is a design failure, not a user failure. When a feature is named "incognito" — a word that literally means having one's identity concealed — and the window turns a secretive shade of dark, the design itself teaches the wrong lesson. The disclaimer that contradicts that lesson sits in small text on the start page, where almost nobody looks, and where people who do look must reconcile it with everything else the interface is telling them.

Google's settlement forced clearer wording. In January 2024, Chrome updated its incognito start page to state more plainly that Google collects data in incognito mode just as it does in standard browsing. That is progress, but it came sixteen years after the feature launched, and only after a lawsuit. Other browsers still use language that leans on the same ambiguity. Firefox's old encouragement to "browse like no one's watching" captured the problem in a single slogan: it promised the one thing private browsing cannot deliver.

There is a broader lesson here about how technology companies name things. A name is a promise, and when the promise is bigger than the feature, users pay the price in bad decisions. People browsed riskier content, entered more sensitive information, and trusted the dark window with things they would never have typed into a normal one — all because the interface told them, in everything but the fine print, that they were hidden.

<picture>
<source srcset="/img/1550751827-4bd374c3f58b-1000.avif" type="image/avif">
<source srcset="/img/1550751827-4bd374c3f58b-700.webp" type="image/webp">
<img src="/img/1550751827-4bd374c3f58b-700.webp" alt="A glowing padlock symbol representing digital security and verification" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*A padlock icon means your connection is encrypted, not that you are anonymous. Private browsing and encryption solve different problems. Image: Unsplash.*

## The Verdict

The claim that incognito mode makes you anonymous is False.

Incognito mode, and every equivalent private browsing feature, does one thing: it stops your own browser from saving your history, cookies, and form data on your device after you close the window. It does not hide your IP address, does not encrypt your traffic, does not stop your internet provider or employer from logging your activity, does not stop websites from tracking you or fingerprinting your device, and does not stop an account you sign into from recording everything you do. The evidence is not close: Chrome's own disclaimer says so, academic studies show most users believe otherwise, and Google's $5 billion lawsuit settlement — which required deleting billions of private browsing records and rewriting the feature's disclosures — confirmed that data collection in private mode was real.

None of this makes private browsing worthless. Used for its original purpose — keeping a shared or borrowed device from remembering your session — it works exactly as advertised. But anonymity is a different promise, and it is one that no browser mode can keep on its own.

## The kicker

The next time you open a private window, ask yourself who you are actually hiding from. If the answer is the next person who picks up your laptop, the dark window has you covered. If the answer is your internet provider, your boss, the website on your screen, or the company whose tracking code runs behind it, the dark window is a curtain, not a wall — and the people on the other side can see straight through it. Real privacy online is not a mode you switch on. It is a set of habits, tools, and choices that start with knowing what your tools actually do. Now you know what this one does. Use it accordingly.

<picture>
<source srcset="/img/1526374965328-7f61d4dc18c5-1000.avif" type="image/avif">
<source srcset="/img/1526374965328-7f61d4dc18c5-700.webp" type="image/webp">
<img src="/img/1526374965328-7f61d4dc18c5-700.webp" alt="Lines of programming code on a dark computer screen, the machinery behind the websites and trackers you visit" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*Behind every website is code you cannot see — including tracking code that private browsing does not switch off. Image: Unsplash.*
