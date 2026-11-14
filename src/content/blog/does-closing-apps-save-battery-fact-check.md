---
title: "Does Closing Apps Save Battery? What Apple and Google Actually Say"
description: "Does closing apps save battery? No — Apple and Google both say swiping apps away does not extend battery life, and reopening them from scratch can use more power than leaving them suspended."
pubDate: 2026-11-14
category: 'Technology'
verdict: 'Misleading'
---

You know the ritual. Your phone feels a little warm, the battery icon has dipped below half, and your thumb starts working the app switcher like a deck of cards — swipe, swipe, swipe — until every preview is gone and the screen is satisfyingly empty. It feels productive. It feels like you have just freed up your phone, the way closing windows on a computer frees up a computer.

There is just one problem. The people who built the operating system on your phone have been saying for a decade that this ritual does not work — and that, done compulsively, it can do the opposite of what you intended. Apple says quitting apps you are not using does not prolong battery life. Google's own engineers have said that closing apps manually does not help, and can actually hurt. Yet the habit survives, passed from parent to child, from colleague to colleague, from one "battery tips" listicle to the next, because it feels so obviously true. Fewer open apps must mean less work for the phone. Less work must mean less battery.

This is a fact-check of that feeling. We looked at what Apple and Google actually say, how modern phones really manage background apps, what the research shows about where battery power actually goes, and the narrow set of cases where swiping an app away genuinely helps. The short version: the ritual is mostly theatre. The long version is more interesting, because it explains why your phone was designed to be left alone — and what actually eats your battery instead.

<picture>
<source srcset="/img/1512941937669-90a1b58e7e9c-1000.avif" type="image/avif">
<source srcset="/img/1512941937669-90a1b58e7e9c-700.webp" type="image/webp">
<img src="/img/1512941937669-90a1b58e7e9c-700.webp" alt="A smartphone home screen full of app icons, the apps most people reflexively swipe away" width="1000" height="563" fetchpriority="high" decoding="async">
</picture>
*A smartphone home screen full of apps — the ones most people reflexively swipe away. Image: Unsplash.*

## The Claim That Never Dies

The claim takes several forms, and you have probably heard all of them. Swiping apps closed saves battery. Leaving apps open in the background drains your phone. You should clear your recent apps every night, or every time you finish using your phone, or whenever the battery runs low. Some versions add a performance promise: closing apps makes your phone faster, too.

It is easy to see why the idea caught on. It was once roughly true. The first generations of smartphones had small amounts of memory, crude multitasking, and apps that could genuinely keep running in the background, chewing through battery while you did something else. Task-killer apps were a whole category in the early app stores, and closing everything felt like good hygiene. The advice spread in the days when a phone with eight apps open genuinely struggled, and it never got updated when the phones did.

But modern phones do not work that way anymore. Both major mobile operating systems were redesigned years ago around a simple insight: the cheapest thing a phone can do with an app you are not using is nothing at all — and the most expensive thing it can do is start that app again from scratch. Everything that follows in this article flows from that one engineering trade-off.

Before we get into the mechanics, it is worth noting how widespread the habit still is. Scroll through any thread about phone battery life and you will find people proudly describing their nightly app-clearing routine, and other people just as proudly describing how they stopped doing it and their battery got better. Both camps are sincere. Only one of them is right about the mechanism, and it is the second one.

## What Actually Happens When You Switch Apps

To understand why the ritual fails, you need to know what your phone does the moment you leave an app. It does not keep the app running. It freezes it.

On an iPhone, apps move through a series of states defined by Apple itself. An app you are using is active. When you switch away, it becomes inactive, then background, then suspended. A suspended app stays in the phone's memory — its last screen held ready so it can reappear instantly — but it executes no code. It uses no processor time and, for practical purposes, no battery. It is a photograph of the app, not a running machine. As one expert put it to TechRadar, today's phones "have the technology to freeze these apps in the background, so you're actually using more power to open them back up than if you just kept them open."

Android works on the same principle with different names. When you leave an app, the system keeps it in a cached process list in memory. If the phone needs that memory for something else, it removes the cached app itself — you never have to intervene. Since Android 6.0, the Doze system has progressively restricted what background apps can do when the phone is idle, and since Android 9, Adaptive Battery has used on-device machine learning to sort apps into priority buckets and throttle background activity for the ones you rarely open. The operating system is, in effect, a full-time caretaker that never sleeps, and it is much better at the job than a human thumb.

This is the crucial fact the myth gets backwards. The app switcher is not a list of running programs. It is a list of recently used programs, most of them asleep. Swiping them away does not stop work that is happening, because no work is happening. It deletes the frozen snapshot, so the next time you open the app, the phone has to do the expensive thing instead of the cheap thing.

## Why Closing Apps Can Cost You Battery

Here is the cost of the ritual, step by step. When you force-close an app, you tell the phone to purge it completely from its fast-access memory. The next time you tap that icon, the phone must fetch the app from its slower main storage, load it into memory, rebuild its interface, reconnect its network sessions, and restore whatever you were doing. Every one of those steps uses the processor, the storage, and the radio. A cold start — launching an app from nothing — is one of the most energy-intensive things a phone does in ordinary use.

Resuming a suspended app, by contrast, costs almost nothing. The app is already in memory. The phone simply unfreezes it. The difference between those two operations is the entire story: the habit that feels like saving power is, for the apps you use every day, a small act of wasting it. As Ritesh Chugh, an associate professor at Central Queensland University, explained to TechRadar, both iOS and Android "suspend idle apps in memory, which means the apps stop using the processor and battery until you open them again, so keeping them open does not normally cause extra power use."

The effect is small for any single swipe. Nobody's phone dies at 3 p.m. because they closed Instagram once. But the ritual is compulsive by nature — the same dozen apps, closed and reopened dozens of times a day — and the cost compounds. Steven Athwal, chief executive of refurbished phone company The Big Phone Store, told TechRadar that when you force close an app and reopen it later, "your phone has to reload it from scratch," and "doing this then takes power from your processor and RAM, for which your battery pays the price."

There is also a subtler cost. Modern phones use the apps you keep in memory to learn your routines. Adaptive Battery on Android, and the equivalent power management on iOS, watch which apps you open and when, and schedule background work around your habits. When you constantly wipe the slate, you deprive those systems of the patterns they use to save power for you.

None of this means closing apps is harmful in any dramatic sense. Your phone will not break. But the claim under examination is specific — that closing apps saves battery — and the mechanism points the other way for the apps you reopen regularly.

## What Apple Says

Apple has been unusually direct about this, by the standards of a company that rarely comments on user habits at all. Its support documentation states, in plain language: "You should close an app only if it's unresponsive." That is the whole guidance. Not when the battery is low. Not at the end of the day. Only when an app has stopped responding.

The iPhone User Guide goes further and names the exact belief it is correcting. In a note on quitting and reopening apps, it says the iPhone automatically manages how apps run in the background, "so quitting apps you're not using doesn't prolong battery life." That is about as close as Apple gets to calling a popular habit pointless.

The most famous statement came in 2016, when a customer emailed Apple's senior vice president of software engineering, Craig Federighi, to ask whether he force-quit his own apps and whether doing so helped battery life. Federighi's reply, later reported by 9to5Mac, was two words long: "No and no." He does not do it, and it does not help. A decade later, that remains the company's position, and the iPhone's design has only moved further in the same direction — more aggressive suspension, more automatic memory management, less reason than ever for a human to intervene.

Apple's advice also points to the correct diagnostic habit. If your battery is draining fast, the company wants you to look at the battery usage screen in Settings, which shows exactly which apps have consumed power and why. That screen, not the app switcher, is where the real culprits show up.

<picture>
<source srcset="/img/1517976487492-5750f3195933-1000.avif" type="image/avif">
<source srcset="/img/1517976487492-5750f3195933-700.webp" type="image/webp">
<img src="/img/1517976487492-5750f3195933-700.webp" alt="A phone charging cable next to a smartphone on a desk, the hardware that actually determines how fast a battery refills" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*A charging cable beside a phone — the hardware, not the app switcher, decides how fast a battery refills. Image: Unsplash.*

## What Google Says

Google's position is the same, stated with the same bluntness by the people who built Android. Dianne Hackborn, a former Android framework engineer, has explained the design in terms any user can understand: "Closing apps manually doesn't help; in fact, it hurts. Relaunching an app uses more battery than resuming it from memory." That is the Android side of the same engineering trade-off Apple describes — the system keeps apps cached precisely so it does not have to pay the cost of starting them again.

Hiroshi Lockheimer, a founding member of the Android team and a former Google senior vice president, has said much the same thing, warning that force-closing apps can slightly worsen performance by fighting the decisions the system has already made about what to keep in memory. The phone has a plan for its memory. Manually clearing it is not helping the plan; it is overriding it with less information.

Google has also moved to enforce the point in software. Starting with Android 14, the company restricted the programming interface that task-killer apps relied on to kill background processes, on the stated grounds that killing background apps could reduce system performance and even increase battery usage, because it would force full restarts of those apps later. In other words, Google did not merely advise against the habit — it took away the tool that automated it.

Android's own battery guidance points users in the same direction as Apple's: check the battery usage screen, restrict the specific apps that are actually misbehaving, and let the system's Doze mode, App Standby buckets, and Adaptive Battery do the routine work. The guidance never includes "close all your apps." That absence is the message.

## The Exceptions: When Closing an App Really Does Help

Everything above comes with a genuine exception, and honesty requires stating it clearly — because it is the grain of truth that keeps the myth alive.

Not every app in your switcher is truly asleep. A small number of apps are allowed to keep working in the background by design, and those can drain a battery. Navigation apps tracking your location, video-calling apps, music and podcast apps playing audio, and apps that continuously refresh data are all genuinely active while they sit in the background. If you finish a drive and leave the maps app running, it can keep using GPS until you stop it. If a social media app is stuck refreshing its feed in a loop, it can burn power for hours.

That is why the experts quoted in the TechRadar report draw a careful line. Force-closing "doesn't apply to certain apps," Athwal said. "GPS, video calls, and data checking apps are all constantly running in the background, even if you minimized them. Swipe these apps away to stop the drain on your battery." The distinction is between an app that is suspended and an app that is working. The first costs nothing; the second is exactly what closing is for.

The same logic applies to an app that is misbehaving: frozen on a loading screen, crashing repeatedly, stuck in a loop, heating the phone, or showing up at the top of the battery usage screen with consumption that makes no sense. In those cases, force-closing is not a battery-saving habit — it is troubleshooting, and it is the right tool. Apple says the same thing: close the app if it is unresponsive, then reopen it and see whether it behaves.

The mistake is generalising from these exceptions to every app. The maps app that is still navigating is the exception; the messaging app, browser, and photo gallery sitting quietly in the switcher are the rule. Closing the first helps. Closing the second costs a little power and saves none. A habit built for the exception, applied to everything, is how a reasonable troubleshooting step turned into a useless daily ritual.

If you are unsure which apps are the exceptions, your phone will tell you. Both iOS and Android have a battery usage screen that ranks apps by actual consumption. An app that appears there with a large share while you have barely used it is a candidate for closing — or for having its background refresh and location permissions restricted. An app that does not appear there is not your problem, however many times it appears in the switcher.

## Where Your Battery Actually Goes

If the app switcher is not the villain, what is? The answer is less satisfying than a ritual, because it is a list of ordinary things rather than a single enemy. The screen is usually the biggest drain, and brightness is the biggest lever: a bright screen outdoors can consume more power than every background app combined. The radio is next — a phone hunting for a weak signal, or holding a GPS lock, works far harder than a phone on strong Wi-Fi. Then come the genuinely active background tasks: location services, background refresh, and audio or video playback.

Research makes the point vividly. A 2012 study by researchers at Purdue University and Microsoft Research, presented at the EuroSys conference, used a tool called Eprof to measure exactly where a smartphone's energy went while running popular free apps. The researchers found that 65 to 75 percent of the energy used to run those free apps was spent on advertising-related functions — downloading ads, sending location and usage data to advertisers — rather than on the app itself. In the free version of Angry Birds, about 75 percent of the power went to advertising modules and only about 25 percent to actually playing the game.

The study also identified a phenomenon the researchers called "tails": after an app finished using the network, the phone's radio kept drawing power for about seven seconds before dropping to a low-power state. More than half of the energy spent serving ads, the researchers found, was consumed during these tails. The lesson is not that ads are secretly draining your battery while you sleep — it is that the phone's real energy costs are dominated by the screen, the radio, and the work apps do while they are open and active, not by the frozen snapshots sitting in the app switcher.

That is why the standard advice from Apple, Google, and independent experts converges on the same short list. Turn the brightness down, or switch on auto-brightness. Use Wi-Fi instead of mobile data where you can. Turn off location access for apps that do not need it, and switch off Background App Refresh for the apps that do not need fresh data. Use Low Power Mode on iPhone or Battery Saver on Android when the battery is low. And if you want to know what is actually draining your phone, check the battery screen rather than the app switcher. For readers chasing a faster charge rather than a longer day, our check of <a href="/blog/does-airplane-mode-charge-your-phone-faster/">does airplane mode charge your phone faster</a> found that the viral tip shaves only a few minutes off a refill — the same pattern as this claim, where a real but tiny effect gets inflated into a miracle fix.

## Claim vs. Evidence: The Whole Picture

| What the claim says | What the evidence shows |
|---|---|
| Swiping apps closed saves battery | Apple says quitting unused apps does not prolong battery life; Google engineers say it can hurt, because relaunching costs more than resuming |
| Apps left in the switcher keep running and draining power | Suspended apps execute no code and use no processor power; they are frozen snapshots in memory, not running programs |
| Closing apps makes your phone faster | The operating system already removes cached apps when it needs memory; manually clearing them forces slower cold starts instead |
| The more apps you close, the more you save | Each reopening costs a cold start — processor, storage, and radio work — so the habit scales the wrong way for apps you use daily |
| Task-killer apps and nightly clearing are good maintenance | Android 14 restricted the API task killers relied on, because killing background apps can reduce performance and increase battery use |
| Nothing else explains fast battery drain | The real drains are screen brightness, weak signal, GPS, background refresh, and active tasks such as navigation or video calls |
| Closing apps is the only fix when the battery runs low | Low Power Mode, lower brightness, Wi-Fi instead of mobile data, and restricting a specific misbehaving app all save measurably more |
| The exception proves the rule | A frozen app or one stuck using GPS genuinely benefits from closing — but that is troubleshooting, not a daily battery habit |

## A Short History of the Myth

The claim did not appear from nowhere. It has a traceable history, and each step explains why it felt true at the time — and why it stopped being true.

**2008–2012: the habit is born.** Early smartphones have little memory and crude multitasking. Apps really can keep running in the background, and task-killer apps become a popular category. The Purdue and Microsoft study of 2012 shows how much energy free apps can waste — but on advertising and network "tails," not on simply sitting in memory.

**2016: both companies answer.** Apple customers ask Craig Federighi whether quitting apps helps battery life. His answer, reported by 9to5Mac, is "No and no." Around the same time, Google's engineers make the same point for Android: the system manages memory itself, and manual closing fights it.

**2018: Android 9 adds Adaptive Battery.** On-device machine learning sorts apps into priority buckets and throttles background work for the ones a person rarely opens. The phone now actively manages the problem the ritual was meant to solve.

**2023: Android 14 restricts task killers.** Google limits the interface that let third-party apps kill background processes, saying the practice can reduce performance and increase battery usage. The operating system has, in effect, outlawed the automated version of the habit.

**2026: the advice converges.** Apple's support pages, Google's developer guidance, and independent testing all say the same thing: close an app only when it misbehaves, check the battery usage screen for real culprits, and spend the effort on brightness, signal, and location settings instead.

<picture>
<source srcset="/img/1518770660439-4636190af475-1000.avif" type="image/avif">
<source srcset="/img/1518770660439-4636190af475-700.webp" type="image/webp">
<img src="/img/1518770660439-4636190af475-700.webp" alt="A close-up of a computer circuit board, the power-management hardware that suspends idle apps automatically" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*A circuit board close-up — the power-management hardware that suspends idle apps without any help from you. Image: Unsplash.*

## What to Do Instead

If the ritual does not work, what does? The honest answer is less ritualistic and more diagnostic — and every item on this list comes from the same official guidance that debunks the myth.

First, find the real culprit. Open the battery usage screen — Settings, then Battery, on both iPhone and Android — and look at which apps actually consumed power over the last 24 hours. If one app sits at the top with a share that does not match how much you used it, that app is your problem. Restrict its background refresh, revoke its always-on location access, or close it when you are done with it. One targeted fix beats a hundred indiscriminate swipes.

Second, attack the screen. Brightness is the single largest controllable drain on most phones. Switch on auto-brightness and let the sensor do the work, or simply turn the slider down a notch. Dark mode helps on phones with OLED displays, where black pixels are effectively switched off. This one change saves more power in a day than a month of app-closing ever could.

Third, mind the radio. A phone on a weak signal works far harder than a phone on strong Wi-Fi, because it boosts its transmitter power to stay connected. Use Wi-Fi where it is available. Turn off Bluetooth, GPS, and 5G when you do not need them. And remember that navigation is one of the few genuinely active background tasks — when the drive is over, stop the navigation, or the GPS will keep working for you.

Fourth, use the power-saving modes the manufacturers built for exactly this situation. Low Power Mode on iPhone and Battery Saver on Android reduce background activity, lower brightness, and disable visual effects with one tap. They are the tool the ritual was trying to imitate, and they actually work.

Fifth, think about charging habits as well as draining habits. The way you charge affects how long a battery stays healthy over years, not just how long it lasts today. Our earlier check of <a href="/blog/overnight-phone-charging-battery/">Does Charging Your Phone Overnight Really Destroy the Battery?</a> found that modern phones are far smarter than the old warnings suggest — but that heat and spending long hours at full charge still carry a real, measurable cost. The same principle applies here: trust the phone's built-in management over folk remedies. And if cold weather is part of your battery trouble, the chemistry is different from anything the app switcher can fix — our check of <a href="/blog/does-cold-weather-drain-your-phone-battery-faster/">does cold weather drain your phone battery faster</a> found the lost capacity is mostly temporary, but charging a freezing phone is the real danger.

Finally, close apps when they deserve it. An app that is frozen, crashing, stuck on a loading screen, or heating your phone has earned a force-close. That is what the gesture is for. Use it like a fire extinguisher — decisively, when there is a fire — not like a broom you sweep with every hour.

<picture>
<source srcset="/img/1419242902214-272b3f66ee7a-1000.avif" type="image/avif">
<source srcset="/img/1419242902214-272b3f66ee7a-700.webp" type="image/webp">
<img src="/img/1419242902214-272b3f66ee7a-700.webp" alt="A smartphone resting on a table in winter light, idle and suspended rather than draining its battery" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*A phone resting idle — suspended apps in memory cost it nothing while it waits. Image: Unsplash.*

## The Verdict

**Misleading.** Closing background apps does not save battery in normal use. Both Apple and Google say so directly: Apple states that quitting apps you are not using does not prolong battery life and that you should close an app only if it is unresponsive; Google's engineers say manual closing does not help and can hurt, because relaunching an app from scratch uses more energy than resuming it from suspension. Modern iPhones and Android phones freeze idle apps in memory, where they consume no processor power, and manage that memory themselves.

The claim survives because it contains a real exception. An app that is actively navigating, on a video call, refreshing data in a loop, or frozen entirely genuinely drains power, and closing that specific app genuinely helps. But the exception is narrow, and the daily ritual applies it to everything — including the messaging app, the browser, and the photo gallery sitting quietly in the switcher, where closing them costs a cold start and saves nothing. A claim that is true for a misbehaving app and false for the other ninety-nine is not good advice. It is misleading.

So the next time your thumb drifts toward the app switcher at 40 percent battery, leave it alone. Turn the brightness down, switch on Low Power Mode, and check the battery usage screen to see what is really eating the charge. Your phone has been managing its own memory for years. It is, by every measure the manufacturers publish, better at it than you are — and it has been trying to tell you that since 2016.

<picture>
<source srcset="/img/1550751827-4bd374c3f58b-1000.avif" type="image/avif">
<source srcset="/img/1550751827-4bd374c3f58b-700.webp" type="image/webp">
<img src="/img/1550751827-4bd374c3f58b-700.webp" alt="A padlock resting on a circuit board, a reminder that the phone's battery management is locked in by design" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*A padlock on a circuit board — the phone's battery management is locked in by design, not by your thumb. Image: Unsplash.*

## Sources

- [TechRadar: Does closing apps really save your phone's battery life? Here's the answer from smartphone experts](https://www.techradar.com/phones/does-swiping-away-apps-actually-save-your-phones-battery-life-the-answer-isnt-what-you-think)
- [MakeUseOf: Stop closing your background apps — you're actually making your phone slower](https://www.makeuseof.com/stop-closing-your-background-apps/)
- [Phys.org: Free apps drain smartphone energy on 'advertising modules' (Purdue University / Microsoft Research, EuroSys 2012)](https://phys.org/news/2012-04-free-apps-smartphone-energy-advertising.html)
- [Debunked.info: Closing background apps saves battery — False](https://debunked.info/terms/closing-apps-saves-battery/)
