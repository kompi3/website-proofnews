---
title: "Is Your Smart TV Really Spying on You?"
description: "Smart TVs do track what you watch using screen-scanning technology called ACR — and regulators have fined companies for doing it without consent. But the creepiest versions of this claim need a closer look."
pubDate: 2026-10-20
category: 'Technology'
verdict: 'Mostly True'
---

You hang the new TV on the wall, connect it to your Wi-Fi, agree to a few setup screens you barely read, and settle in for the evening. Somewhere in a data center, a server takes a photograph of your screen. Then another one. And another — every few seconds, all evening, possibly even when the TV looks switched off.

That is not a conspiracy theory. It is the business model of the modern television industry.

The claim that "your smart TV is spying on you" is one of the most-shared tech privacy warnings on the internet, and like the best viral claims, it mixes something genuinely true with something exaggerated. Smart TVs do systematically record and monetize what you watch. Federal regulators have fined a TV maker millions of dollars for it, and state attorneys general are still suing over it. But the TV is probably not filming your living room, and whether it is listening to your conversations is a genuine, unresolved dispute. Here is what the evidence actually shows.

<picture>
<source srcset="/img/1518770660439-4636190af475-1000.avif" type="image/avif">
<source srcset="/img/1518770660439-4636190af475-700.webp" type="image/webp">
<img src="/img/1518770660439-4636190af475-700.webp" alt="Close-up of a circuit board like the ones inside a modern smart TV" width="1000" height="563" fetchpriority="high" decoding="async">
</picture>
*A close-up of the circuitry inside a modern television — the hardware that now phones home constantly.*

## The claim

Scroll through social media and you will find some version of this warning: your smart TV is spying on you. It watches everything you watch, listens to your conversations, sells the data to advertisers, and you cannot stop it. Some posts go further, claiming the TV records you even when it is switched off and uploads everything the moment it reconnects to the internet.

These warnings went viral again in September 2026, when two well-known technology outlets, Gamers Nexus and Level1Techs, published a lengthy investigation into LG smart TVs. The videos — watched hundreds of thousands of times — alleged that the TVs take frequent screenshots of whatever is on screen, scan every device on the home Wi-Fi network, and capture microphone audio while in standby, storing it locally and uploading it when the internet returns. LG pushed back hard, denying the audio claims. But the firestorm reminded millions of people of an uncomfortable question they had never fully answered: what exactly is the glowing rectangle in their living room doing?

## What your TV actually does: ACR, explained

The heart of this story is a technology with an innocent-sounding name: Automatic Content Recognition, or ACR.

ACR works a lot like the music-identification app Shazam, except it watches your screen instead of listening to your radio. Your TV periodically grabs a sample of what is displayed — researchers describe it as capturing screenshots every few seconds, and some systems sample multiple times per second. Software turns each sample into a digital "fingerprint," which the TV compares against a giant database of fingerprints to identify exactly what you are watching: the show, the episode, the advertisement, even the video game. It works no matter the source — built-in streaming apps, cable boxes, Blu-ray players, game consoles, or a laptop plugged in through HDMI.

Your viewing history is then tied to your household — through your IP address, a persistent device identifier, and details about your Wi-Fi network — and sent to the manufacturer. The stated purposes are audience measurement, content recommendations, and, most importantly, advertising. The data can be sold or shared with advertisers and data brokers, who merge it with other information to build detailed profiles of your household's habits. It does not stop at content: TVs may also log app usage, your approximate location, and information about other devices sharing your network.

This is not a fringe feature buried in one brand. Samsung, LG, Vizio, Roku, Sony, TCL, and Hisense all use ACR or work with partners that do. It is typically switched on by default, hidden under friendly setup-screen language, and privacy researchers consistently report that turning it off requires digging through several layers of settings menus with different names on every brand. One privacy review summed up the industry's attitude this way: the explanation during setup exists, but it is not clear enough, and switching the feature off takes too much effort.

And there is a wrinkle that makes even "unplug it" an incomplete answer. Technology reviewers have found that some televisions keep capturing ACR data while disconnected from the internet and simply upload it the next time they connect. A disconnected network cable, on its own, is not a magic privacy wand — the tracking has to be switched off in the settings, too.

<picture>
<source srcset="/img/1526374965328-7f61d4dc18c5-1000.avif" type="image/avif">
<source srcset="/img/1526374965328-7f61d4dc18c5-700.webp" type="image/webp">
<img src="/img/1526374965328-7f61d4dc18c5-700.webp" alt="Cascading green digital code symbolizing the viewing data TVs collect" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Streams of digital data — an apt symbol for the viewing records your TV quietly uploads.*

## The Vizio case: when "spying" became a legal fact

If you want the single strongest piece of evidence that this is real, it is a courtroom record, not a YouTube video.

In February 2017, the U.S. Federal Trade Commission announced that smart TV maker Vizio had agreed to pay $2.2 million to settle charges brought by the FTC and the New Jersey attorney general. The case — the first FTC enforcement action ever involving smart televisions — alleged that Vizio had used automated content recognition in more than 11 million internet-connected TVs to track what customers watched, all without getting their consent first.

The details in the complaint are worth reading, because they read like the viral claim with footnotes. Vizio's "Smart Interactivity" feature continuously collected a selection of pixels from the consumer's screen and matched them against a database to identify the content being watched. The televisions were uniquely identifiable through a persistent identifier. Through those identifiers, Vizio also collected and shared IP addresses, MAC addresses, Wi-Fi signal strength and access points. It supplemented the viewing data with demographic information — sex, age, marital status, household size, education level, home ownership, and household value. Consumers, the FTC said, were not adequately informed that any of this was happening, and Vizio's description of the feature as something designed to "enable program offers and suggestions" was misleading, because the offers and suggestions never materialized. The data just went to advertisers.

The settlement required Vizio to "prominently disclose and obtain affirmative express consent" before collecting and sharing viewing information. The case had started with a 2014 complaint and followed reporting by the nonprofit news outlet ProPublica alleging that the Irvine, California company was tracking viewers' habits and sharing the information with advertisers without properly disclosing it in its privacy policy.

That is about as close as a fact-check gets to a smoking gun: a federal agency, a multi-million-dollar fine, and a named company admitting — through a settlement — that it collected detailed viewing histories from 11 million living rooms without proper consent.

## It is not just Vizio, and it is not over

The Vizio settlement did not end the practice. It arguably just professionalized the disclosures.

In December 2025, Texas Attorney General Ken Paxton sued Samsung and four other television manufacturers, alleging they unlawfully collected consumers' viewing information through ACR technology. The cases produced real agreements: in February 2026, Samsung agreed to obtain consumers' express, informed consent before collecting or processing ACR viewing data and to update its TV interfaces to explain clearly how viewing information is collected and used. LG reached a similar agreement in May 2026, requiring clear pop-up disclosures and a direct way to opt out.

Regulators in other states are moving from enforcement to outright bans. Kentucky's HB 692, signed in April 2026, bars companies from collecting ACR data without a consumer's consent — it takes effect July 1, 2027.

Consumer Reports has reported that shoppers consistently struggle to understand and control smart-TV privacy settings — the menus are confusing, the terminology differs by brand, and the important switches are hard to find. That confusion is arguably the point: tracking that is on by default and hard to switch off captures far more data than tracking that asks politely first.

<picture>
<source srcset="/img/1526304640581-d334cdbbf45e-1000.avif" type="image/avif">
<source srcset="/img/1526304640581-d334cdbbf45e-700.webp" type="image/webp">
<img src="/img/1526304640581-d334cdbbf45e-700.webp" alt="A pile of US dollar bills representing the advertising revenue from viewing data" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Your viewing habits are currency — and manufacturers are cashing in.*

## Why they do it: follow the money

Why would a TV company care what you watched on Tuesday night? Because the money is enormous, and it has quietly changed what a television company is.

Vizio's advertising and data division, Platform+, generated $598 million in revenue in 2023 — from a company most people still think of as "the company that sells cheap TVs." Industry analysts project the ACR market will reach $23.37 billion by 2034. Manufacturers openly say that ACR revenue helps keep television prices low — the $400 TV is cheap partly because the TV keeps paying for itself after you buy it, with your data.

That is why the industry fights so hard to keep ACR on by default, and why the setting is never where you left it after a software update. Reviewers advise checking the privacy settings periodically, because updates can re-enable features you already switched off. Your television is not just a display anymore. It is a data-collection terminal that happens to show movies.

## But can your TV actually see you?

Here the viral claim outruns the evidence — and it is important to say so.

Despite the word "spying," the vast majority of modern smart TVs have no camera. Built-in cameras have largely disappeared from televisions over the past decade. A few older models — Samsung's F8000 series, for example — shipped with a small retractable camera along the top bezel for video calls and gesture controls, and some manufacturers sell cameras as add-on accessories, usually mounted above the screen for fitness apps or video chat. But a television without a camera cannot secretly film you, no matter what its software does. If you are unsure about your own set, privacy experts suggest a simple physical check: look for a small lens on the top bezel, then search your exact model number on the manufacturer's website to confirm. If your TV does have a camera, a physical privacy shutter — or, failing that, a piece of opaque tape over the lens — is the reliable fix.

So when people picture their TV "watching" them the way a person watches, that is, for nearly all current models, not what is happening. What is happening is arguably more systematic but less cinematic: the TV watches what is on its own screen, not what is in your room.

## What about the microphone? The honest answer is: disputed

The audio question is where the newest and most heated dispute lives.

Voice-controlled TVs do have microphones, and that is not controversial: if your set has hands-free voice control, it listens locally for a wake phrase like "Hi LG," and other sets listen after you press the microphone button on the remote. When you issue a voice command, your TV records and processes your speech. LG updated its terms to tell owners that voices "may be recorded" by the TV, shifting the responsibility to the owner to warn household members and guests.

The controversial claim — the one at the center of the September 2026 Gamers Nexus and Level1Techs investigation — is that LG TVs capture microphone audio while in standby, store it, and upload it when the TV reconnects. The investigators reported finding microphone audio and plain-text voice logs on tested sets, including data associated with standby use, and said a disconnected set retained data and transmitted it after reconnecting.

LG flatly denies this. The company's position is that voice data is processed only when you press and hold the voice button on the remote, or when you have deliberately enabled far-field voice recognition and say the wake word. The wake-word check, LG says, happens on the TV itself, and if no wake word is detected, the audio sample is immediately deleted locally and never sent to any server. Independent privacy reviewers who have examined the dispute note that this is the most serious claim and also the one in genuine dispute — it cannot be settled from the couch, and LG calls the coverage misleading.

There is a middle ground worth noting: even where companies deny continuous recording, a dark screen is not the same as a powerless TV. A television in standby is still a computer with a microphone circuit, and the only guaranteed cutoff is disabling hands-free voice control or using the hardware microphone switch where one exists.

<picture>
<source srcset="/img/1550751827-4bd374c3f58b-1000.avif" type="image/avif">
<source srcset="/img/1550751827-4bd374c3f58b-700.webp" type="image/webp">
<img src="/img/1550751827-4bd374c3f58b-700.webp" alt="A glowing microchip circuit representing the software running inside smart TVs" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*A glowing chip — a reminder that a smart TV is a networked computer, not just a screen.*

## The Verdict

**Mostly True.**

The core of the claim is solidly documented: smart TVs do systematically track what you watch. Through Automatic Content Recognition, major manufacturers capture screenshots of your screen every few seconds, identify everything from streaming shows to HDMI-connected game consoles, tie that history to your household, and feed it into a multi-billion-dollar advertising machine. The FTC fined Vizio $2.2 million for doing this to 11 million TVs without proper consent. Texas forced Samsung and LG into consent agreements in 2026. Kentucky has banned non-consensual ACR collection outright. This is not speculation — it is the industry's stated business model.

Where the claim overreaches is the cinematic version: the idea that your TV is filming you or recording your private conversations around the clock. Most modern TVs have no camera at all and cannot film you. The standby-audio allegations against LG are serious but genuinely disputed — the company denies them, and independent reviewers say the dispute cannot be resolved from the available evidence. Treat that part as unproven, not established fact.

In short: your smart TV is almost certainly spying on your viewing habits. It is almost certainly not spying on your face. Whether it is spying on your voice is the one part of this story still being fought over — and the safest move is to act as if the answer might be yes.

## What you can do about it

The good news is that most of the tracking can be switched off, and doing so does not break anything you actually use — picture quality, streaming apps, and features all keep working. You only lose ad targeting and tracked recommendations.

The bad news is that every brand hides the switch somewhere different, and updates can turn it back on. Here are the key settings, compiled from current manufacturer documentation and independent privacy guides:

- **Samsung (Tizen):** Settings → Terms & Privacy → Privacy Choices → turn off **Viewing Information Services** (Samsung's ACR) and **Interest-Based Advertising**.
- **LG (webOS):** Settings → All Settings → General → System → Additional Settings → turn off **Live Plus** (LG's ACR); enable **Limit Ad Tracking** and **Do Not Sell My Personal Information**.
- **Sony (Android/Google TV):** Settings → All Settings → turn off **Samba Interactive TV** (Sony's ACR partner).
- **Vizio (SmartCast):** Settings → All Settings → Admin & Privacy → turn **Viewing Data** off.
- **Roku TVs (TCL, Hisense, and others):** Settings → Privacy → Smart TV Experience → uncheck **Use Information for TV Inputs**; also limit ad tracking under Advertising.
- **Amazon Fire TV:** Settings → Preferences → Privacy Settings → disable data tracking and interest-based ads.

Beyond the settings, consider the nuclear options: disconnect the TV from Wi-Fi entirely and use a separate streaming device you control, or put the TV on a guest network so it cannot scan your other devices. And if voice control makes you uneasy, disable hands-free listening — or use the hardware microphone switch if your model has one.

Your television spent the last decade learning to watch you back. The least you can do is decide, consciously, how much of that you are willing to allow — instead of letting a setup screen decide for you.
