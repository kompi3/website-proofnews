---
title: "No, You Don't Need to Change Your Password Every 90 Days — the Security Rule That May Make Things Worse"
description: "For decades, IT departments forced everyone to rotate passwords every 90 days. But NIST, the FTC, and security research now say scheduled password changes don't help — and can make passwords weaker."
pubDate: 2026-10-24
category: 'Technology'
verdict: 'Misleading'
---

Every three months, like clockwork, it happened: a pop-up from the IT department announcing that your password had expired. Again. You invented something new — "Summer2026!" instead of "Spring2026!" — typed it in, confirmed it, and forgot it by Thursday. Millions of office workers repeated this ritual for decades, reassured by a simple story: changing your password regularly keeps hackers out.

<picture>
<source srcset="/img/1526374965328-7f61d4dc18c5-1000.avif" type="image/avif">
<source srcset="/img/1526374965328-7f61d4dc18c5-700.webp" type="image/webp">
<img src="/img/1526374965328-7f61d4dc18c5-700.webp" alt="Stylized green computer code streaming down a black background" width="1000" height="563" fetchpriority="high" decoding="async">
</picture>
*Stylized green computer code — the language of the credential-stealing economy that thrives on predictable passwords.*

Except the story isn't true. At least, not the way most people learned it. The world's leading authority on password standards — the U.S. National Institute of Standards and Technology — now explicitly tells organizations *not* to force periodic password changes. The man who wrote the original rule has publicly disowned it. And a chain of peer-reviewed studies suggests that mandatory rotation doesn't just fail to improve security; it actively nudges people toward weaker, more guessable passwords.

So is it time to retire the 90-day password change? The evidence says mostly yes — with a few important caveats that keep the verdict at *Misleading* rather than *False*.

## The Claim

The claim under review is a household security maxim: **you should change your passwords every 60 to 90 days to stay safe.** It appeared in company handbooks, school IT policies, and well-meaning advice columns for roughly two decades. In many workplaces it wasn't advice at all — software enforced it, locking accounts until a fresh password was supplied.

The logic sounded bulletproof. If a thief steals your password, a scheduled change cuts their window of opportunity to a few months. Fresh secrets are safer than old ones. Like changing the locks, right?

That intuition is understandable. It's also wrong in a way that took the security establishment years to admit — because it assumed passwords behave like house keys, when in practice they behave like habits. And habits, when nagged, get lazy.

## The Rule Is Older Than the Web

The password-change habit predates even Burr's 2003 appendix. Its true roots lie in the U.S. Department of Defense's "Green Book" — officially CSC-STD-002-85, the *Department of Defense Password Management Guideline* published on April 12, 1985, one of the military's "Rainbow Series" of computer security documents. In an era of time-shared mainframes and dumb terminals, the Green Book declared that "a user's password must be changed periodically," and security practice manuals of the era instructed administrators to require new passwords at least every 30 days, enforced by lockouts and grace-period warnings.

That made a certain sense in 1985. Authentication happened on closed military networks where the main threat was a password being overheard, shoulder-surfed, or quietly shared — and where changing it regularly genuinely limited the damage. The practice then migrated from classified systems to corporate IT, from 30 days to 60 or 90, and eventually to the consumer advice columns of the early web. Nobody stopped to ask whether the threat model of a Pentagon mainframe in 1985 matched the threat model of a Gmail account in 2026. It doesn't — and that mismatch is the whole story.

## Where the 90-Day Version Came From

The 90-day rule that office workers know has a second birth certificate, and it belongs to one person: Bill Burr, a manager at NIST who authored an appendix to NIST Special Publication 800-63 back in 2003. The appendix recommended periodic password expiry alongside the familiar complexity rules — uppercase, lowercase, digits, symbols.

Here's the part most corporate IT policies leave out: the appendix was written with very little empirical data behind it. It leaned heavily on an older, largely theoretical paper about password entropy. The idea that expiry improves security was more engineering intuition than proven fact.

Burr himself has said so. In a 2017 interview with the *Wall Street Journal*, he looked back at that appendix and said of his handiwork: "Much of what I did I now regret."

By then, NIST had already moved on. The 2017 revision of SP 800-63B — the section of the standard dealing with passwords — told organizations to drop composition rules and to stop forcing periodic changes unless there was evidence a password had been compromised. And the position has only hardened since: NIST SP 800-63B Revision 4, finalized on July 31, 2025, is the governing federal standard through at least 2026, and it is explicit. In standards language, "SHALL NOT" means prohibition, not suggestion — and verifiers "SHALL NOT" require periodic password changes. The rule now: force a change only when there is evidence of compromise.

So the man who started it all, and the agency that published it, both reversed course. The question is what the research says — and it says something uncomfortable for anyone who ever typed "Password1!" into a corporate portal.

## What the Research Actually Shows

The core problem with forced rotation was identified as early as 2009 and 2010, in a University of North Carolina at Chapel Hill study that analyzed passwords from more than 10,000 defunct accounts of former students. Researchers found that when people were required to change passwords on a schedule, they didn't invent strong new ones. They performed what researchers call "transformations": small, predictable tweaks to the old password. "Password1" became "Password2." "Spring2024" became "Spring2025." Adding a digit, swapping a season, bumping a year — patterns an attacker can guess within a handful of tries.

A later independent analysis of a real corporate password system found that even in environments complying with strict complexity regulations, roughly 13 percent of newly chosen passwords were close variants of the password they replaced. The same analysis found that about a quarter of passwords were similar to the system default, the username, or the word "password" itself — vulnerable to an intelligent brute-force attack, phishing, or social engineering.

The complexity rules that usually accompanied expiry fared no better. A study by Professor Steve Furnell of Plymouth University pitted 16 passwords of varying strength against the password-strength meters built into major websites. The password "Password1!" — the exact kind of rotated, rule-compliant password that expiry policies produced — performed surprisingly well, with three meters rating it as secure or very secure. Meanwhile, only five of the ten explicitly weak passwords tested were consistently flagged as unsafe by all the meters. The meters, Furnell concluded, were offering "misleading information that leaves users misguided and with a false sense of security." Complexity theater, in other words, graded its own homework.

<picture>
<source srcset="/img/1511707171634-5f897ff02aa9-1000.avif" type="image/avif">
<source srcset="/img/1511707171634-5f897ff02aa9-700.webp" type="image/webp">
<img src="/img/1511707171634-5f897ff02aa9-700.webp" alt="A smartphone displaying app icons next to a laptop keyboard" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*The average person now juggles dozens of accounts on phones and laptops — fertile ground for the shortcuts forced rotation encourages.*

This finding landed at the U.S. Federal Trade Commission. In a March 2016 blog post titled "Time to rethink mandatory password changes," the FTC's chief technologist Lorrie Cranor — at the time a professor of computer science at Carnegie Mellon University — cited the UNC research and wrote that "users who are required to change their passwords frequently select weaker passwords to begin with, and then change them in predictable ways that attackers can guess easily." Her conclusion, quoted widely at the time: "Unless there is reason to believe a password has been compromised or shared, requiring regular password changes may actually do more harm than good in some cases."

Note the mechanism. It's not that a new password is inherently worse than an old one. It's human nature doing the damage. Faced with the impossible task of memorizing dozens of fresh, complex passwords several times a year, people satisfice: they start with something simple and memorizeable, then rotate the digit. The policy meant to outsmart attackers ends up training users into predictable behavior — behavior attackers can model and exploit.

## Attackers Don't Wait for Expiry Dates

There's a second, practical argument against rotation, grounded in how real-world credential theft works. Security research from Microsoft has found that attackers who steal passwords exploit them almost immediately — long before an arbitrary 90-day expiration window would take effect. The window of opportunity that rotation was meant to close barely exists.

What actually drives account compromise, according to Verizon's long-running Data Breach Investigations Report, is the abuse of stolen or weak credentials — the 2017 edition of the report found that around 81 percent of hacking-related breaches had "leveraged either stolen and/or weak passwords." The problem is credentials getting stolen in the first place — through phishing, malware, and massive breaches that dump billions of username-password pairs onto the dark web — not credentials going stale.

<picture>
<source srcset="/img/1518770660439-4636190af475-1000.avif" type="image/avif">
<source srcset="/img/1518770660439-4636190af475-700.webp" type="image/webp">
<img src="/img/1518770660439-4636190af475-700.webp" alt="Close-up of a computer chip and circuit board components" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*A computer processor close-up — the brute-force engines that crack predictable passwords in seconds.*

That changes the math completely. If your password is in a breach database, an attacker doesn't need 90 days — they'll try it within hours, often against dozens of other sites in an automated credential-stuffing attack. And if your password is unique, strong, and uncompromised, it doesn't become dangerous on its 91st day. A calendar deadline protects against a threat model that barely exists, while imposing a tax — helpdesk tickets, forgotten logins, password sticky notes on monitors — that pushes people toward the genuinely dangerous behaviors: reuse, predictability, and writing secrets down in the open.

Scale makes the mismatch worse. Breach analyses regularly find tens of millions of accounts protected by passwords like "password," "admin," "123456," or the user's own name — credentials attackers guess first because they always work somewhere. No rotation schedule fixes a password that was guessable on day one. The lever that matters is uniqueness: a strong password used on exactly one site confines a breach to that site, no matter how old the password gets.

## Why the Myth Refuses to Die

If the experts reversed course years ago, why does the "change it every 90 days" message still greet employees at so many companies? A few stubborn reasons.

First, inertia. IT policies written in 2012 survive on autopilot, and few organizations enjoy rewriting security handbooks. Second, compliance frameworks that lag behind the research: PCI DSS version 4.0 still requires 90-day rotation for accounts relying on single-factor authentication, though it offers an escape hatch — organizations using continuous, risk-based authentication don't need to rotate on a schedule. ISO 27001 and its companion controls contain no arbitrary rotation mandate; SOC 2 evaluates whether access controls work rather than prescribing a cadence. So part of the industry's attachment to rotation is regulatory residue, not evidence.

Third, the advice *feels* responsible. Security theater is sticky: a ritual that visibly demonstrates diligence is hard to abandon even when studies show it backfires. Telling employees to change passwords regularly looks like leadership; telling them to stop requires explaining the research, which takes longer than sending an expiry notice.

And fourth, the original claim isn't pure fiction — which is why our verdict is *Misleading* rather than *False*. There are real situations where changing a password on a schedule-like basis makes sense. We owe readers the honest list.

There's also a fifth reason worth naming: the cost of being wrong feels asymmetric to decision-makers. If an executive drops mandatory rotation and a breach later makes the news, the expired policy becomes a scapegoat. If they keep it, the daily toll — employees locked out of accounts before morning coffee, IT helpdesks drowning in reset tickets, the dreaded sticky note on the monitor — is invisible on any security dashboard. One industry guide put the burden bluntly, reporting that nearly 80 percent of users needed helpdesk assistance within a single 90-day reset window. Even if that figure is on the high end, the dynamic is real: rotation trades a theoretical reduction in attack windows for a very concrete tax on productivity — paid in user frustration, support costs, and, ironically, the weaker passwords the whole policy was meant to prevent.

## The Honest Exceptions

**Compromise beats calendars.** If there's evidence your password was stolen, shared, or exposed in a breach — change it immediately, and reset active sessions where possible. NIST's current model is called "compromise-driven expiration": change on suspicion, not on schedule. This is the one rotation rule everyone agrees on.

**Shared and stale credentials.** Passwords shared among coworkers, vendor support accounts, and default credentials on devices deserve rotation when the circle of people who know them changes — an employee leaves, a contractor finishes, a role is handed off.

**Compliance obligations.** If your organization is subject to PCI DSS or a contract that mandates rotation, that's a legal reality, not a security verdict. The fix is a risk-based conversation with auditors, not quiet noncompliance.

**Weak or reused passwords.** If your current password is eight lowercase letters from 2019 and you've used it on twelve sites, the calendar isn't the problem — the password is. Change it now, to something long and unique, and don't reuse it anywhere else.

<picture>
<source srcset="/img/1559757175-5700dde675bc-1000.avif" type="image/avif">
<source srcset="/img/1559757175-5700dde675bc-700.webp" type="image/webp">
<img src="/img/1559757175-5700dde675bc-700.webp" alt="A model of a human brain next to a model of a neuron" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*The human brain is optimized for convenience, not credential entropy — the psychology that makes forced rotation backfire.*

## What the Experts Say to Do Instead

The good news: the replacement for scheduled rotation is simpler, not harder. Current NIST guidance, the FTC's advice, and the consensus of security researchers converge on a short list:

1. **Choose one long, unique password per account.** Length defeats automated cracking far better than character soup. A 15-character passphrase like "correct-horse-battery-staple" is more resistant to brute force — and more memorable — than "P@ssw0rd!23." NIST now permits up to 64 characters.
2. **Use a password manager.** It's the only realistic way to maintain dozens of long, unique passwords. Modern guidance treats pasting into password fields as legitimate specifically so password managers work well.
3. **Check new passwords against breach databases.** NIST requires verifiers to screen against blocklists of breached, dictionary, and service-specific credentials — so your "unique" password isn't one of the millions already in attackers' hands.
4. **Turn on multi-factor authentication everywhere it matters.** A stolen password alone shouldn't be enough to get in. Phishing-resistant factors — passkeys, hardware keys — are the direction the industry is moving, with the 2025 NIST standard formally recognizing syncable passkeys.
5. **Change on suspicion, not on schedule.** Breach notification? Phishing email you clicked? A service announcing a compromise? Change that password, everywhere you reused it — which, per rule 1, should be nowhere else.

This is not a radical program. It's what happens when you stop nagging people and start designing for how humans actually behave.

## The Verdict

**Misleading.** The claim that you should change your passwords every 60 to 90 days was born from an evidence-thin 2003 NIST appendix whose own author later disowned it. NIST's current standard — SP 800-63B Revision 4, finalized July 31, 2025 — explicitly prohibits forcing periodic changes: rotate only on evidence of compromise. The FTC's chief technologist concluded in 2016 that mandatory rotation "may actually do more harm than good in some cases," backed by a UNC Chapel Hill study showing users respond with predictable tweaks attackers can guess. Attackers exploit stolen credentials within hours, not on the 90th day, and the data show most breaches trace to stolen or weak credentials, not stale ones.

It's *Misleading* rather than *False* because rotation does limit the lifespan of an undetected compromise, and compliance frameworks like PCI DSS still mandate it in certain configurations — so the calendar isn't entirely meaningless. But as a general rule of personal security, the 90-day change is obsolete advice that survives on inertia, theater, and handbooks nobody has updated.

<picture>
<source srcset="/img/1550751827-4bd374c3f58b-1000.avif" type="image/avif">
<source srcset="/img/1550751827-4bd374c3f58b-700.webp" type="image/webp">
<img src="/img/1550751827-4bd374c3f58b-700.webp" alt="A glowing blue circuit board pattern photographed through glass" width="1000" height="563" loading="lazy" decoding="async">
</picture>
*Modern authentication is moving beyond the password entirely — toward passkeys and hardware keys that can't be guessed.*

## The Kicker

There's a quiet irony in the life of Bill Burr's appendix. A short document written by one man, on thin evidence, shaped the login screens of the world for twenty years — and its author needed a decade to publicly walk it back. The lesson isn't that experts are fools. It's that security advice is a hypothesis, and hypotheses need rechecking against reality. The recheck happened: two decades of data, several independent studies, and the unanimous turn of the standards bodies. The 90-day password change had a good run. Retire it, pick a long unique password, turn on two-factor authentication — and change your password only when there's actually a reason.
