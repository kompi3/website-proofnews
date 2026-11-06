---
title: "Do Smartwatches Measure Blood Pressure Accurately? The Short Answer Is Mostly No"
description: "Do smartwatches measure blood pressure accurately? For most models, no — the numbers are estimates that need regular calibration against a real cuff, and the one FDA-cleared Apple feature never shows a number at all."
pubDate: 2026-11-06
category: 'Technology'
verdict: 'Misleading'
---

Glance at your wrist and your watch tells you the time, counts your steps, tracks your sleep, and estimates your heart rate. So when the box promises it can also read your blood pressure, the claim feels like a small step, not a leap. Blood pressure is the number doctors check at almost every visit, and high blood pressure — hypertension — is so common and so silent that roughly a third of adults who have it do not know. A watch that could spot it early, painlessly, every day, would be one of the most useful gadgets ever sold.

That promise is now printed on real product pages, backed by real regulatory clearances, and repeated in millions of advertisements. Samsung sells blood pressure monitoring on its Galaxy Watch. Apple added hypertension notifications to the Apple Watch in 2025. Huawei sells a watch with a tiny inflatable cuff built into the strap. Smaller brands promise the same feature on watches that cost a fraction of the price. The marketing all points in the same direction: the cuff is old technology, and your wrist already has a replacement.

The evidence points somewhere else. No consumer smartwatch measures blood pressure the way a cuff does, and most of them do not measure it at all in any meaningful sense of the word. What they do is estimate it — inferring a number from the shape of your pulse, a number you typed in weeks ago, or a pattern collected over a month. Some of those estimates are good enough to be interesting. None of them, according to the heart and hypertension societies that write the clinical guidelines, is good enough to diagnose high blood pressure or to manage its treatment. And the most famous feature of all, Apple's, never shows you a blood pressure number in the first place.

This is not a story about a technology that failed. It is a story about a technology that works just well enough to be misunderstood — and about the gap between what a clearance letter says, what an advertisement implies, and what a number on your wrist actually means.

<picture>
<source srcset="/img/1511707171634-5f897ff02aa9-1000.avif" type="image/avif">
<source srcset="/img/1511707171634-5f897ff02aa9-700.webp" type="image/webp">
<img src="/img/1511707171634-5f897ff02aa9-700.webp" alt="A hand holding a smartphone against a blurred background" width="1000" height="563" fetchpriority="high" decoding="async">
</picture>

*A smartwatch can count your steps and track your pulse, but blood pressure is a much harder number to read from the wrist.*

## The claim, as it is sold

The claim comes in several strengths, and the strength matters. At its boldest, it appears on the product pages of budget smartwatches sold through online marketplaces: a watch that "monitors blood pressure" around the clock, no cuff, no calibration, no caveats. A step down from that, Samsung's Galaxy Watch promises blood pressure readings on your wrist, and its marketing presents the feature alongside heart-rate and ECG tracking as though it were the same kind of measurement. A step down again, Apple promises something more modest — not a reading, but a notification that your blood pressure may be high.

All three versions are aimed at the same human hope. Blood pressure is invisible. It has no symptoms until it has already damaged the heart, the kidneys, the brain, or the eyes, which is why doctors call hypertension the silent killer. A device you already wear, checking silently in the background, sounds like the perfect early-warning system. And the companies selling these watches know it: the blood pressure feature is not buried in a spec sheet, it is on the box, in the launch keynote, and in the advertisement.

There is a reason the claim feels plausible. Smartwatches already do something that looks very similar. They measure heart rate with an optical sensor, shining green light into the skin and watching how much light bounces back as blood pulses through the vessels. That works well enough that heart-rate tracking is now a settled, trusted feature. Blood pressure seems like the next number in line. It is not. Heart rate is a rhythm; blood pressure is a force. Counting beats is easy. Measuring the pressure inside an artery, through skin, fat, muscle, and a moving wrist, without squeezing anything, is one of the hardest problems in wearable technology.

## What a cuff actually does, and why it is the standard

To understand why watches struggle, it helps to understand what the humble cuff is doing. A blood pressure cuff is not a sensor that reads pressure directly. It is a controlled experiment performed on your arm. The cuff inflates until it squeezes the artery shut, stopping blood flow, and then deflates slowly while a sensor listens for the vibrations of blood returning. The pressure at which flow returns is the systolic pressure, the top number. The pressure at which the vibrations smooth out is the diastolic pressure, the bottom number. It is a mechanical measurement of a mechanical event, and it works across nearly every body type, skin tone, and age, which is why every guideline in medicine treats a validated upper-arm cuff as the reference standard.

That standard has a formal gatekeeper. Independent validation protocols — the best known is run through STRIDE BP, the international registry of validated blood pressure devices — require a device to be tested head-to-head against a reference standard under standardised conditions, in a defined population, with defined accuracy limits. As of mid-2026, no wrist-worn wearable had achieved a STRIDE BP listing for blood pressure. That fact alone does not prove the watches are useless. It does tell you that, in the judgement of the people who certify blood pressure devices for a living, none of them has yet passed the test that a thirty-dollar pharmacy cuff passes routinely.

It is also worth saying plainly what "accurate" means in this field. Clinicians generally want a blood pressure device to be within about 5 mmHg of the true value on average, with most individual readings close to that. Five points is the difference between 128 and 133 — the difference, in some cases, between a normal reading and a diagnosis. A device that is usually close but sometimes off by fifteen points is not a slightly worse cuff. It is a different kind of instrument, and treating it as a cuff is where the danger starts.

## How a watch tries to guess

Almost every smartwatch that claims a blood pressure feature uses one of three approaches, and they are not equally honest.

The first is photoplethysmography, usually shortened to PPG. This is the same optical sensor the watch uses for heart rate. It shines light into the skin and measures how the reflected light changes with each pulse. Software then studies the shape of that pulse wave — how steep it rises, how quickly it falls, how wide it is — and feeds those features into a machine-learning model trained on thousands of people whose blood pressure was measured with a cuff at the same time. The model learns that a certain wave shape usually goes with a certain pressure, and it guesses accordingly. The guess is indirect in the strongest sense: the sensor measures light, not pressure, and the relationship between wave shape and pressure depends on the stiffness of your arteries, your age, your hydration, your skin tone, the temperature, how tightly the band fits, and whether you are moving. Change any of those and the model can drift.

The second approach is pulse transit time, or PTT. It combines the optical sensor with the watch's ECG electrode and measures the delay between the heart's electrical signal and the arrival of the pulse at the wrist. In principle, a stiffer, more pressurised artery transmits the wave faster. In practice, the same long list of confounders applies, and the method usually needs a cuff reading to anchor it.

The third approach is the honest one: a miniature inflatable cuff built into the watch strap. Huawei's Watch D line and Omron's HeartGuide do exactly this. A tiny pump inflates a bladder in the strap, squeezes the wrist artery, and measures the pressure the same way an upper-arm cuff does, only smaller. These are the only consumer watches that measure blood pressure rather than estimate it, and the distinction shows up in the results. In validation testing at rest, cuff-based wrist devices have produced readings within about 1 mmHg of a standard device for systolic pressure and about 1.6 mmHg for diastolic — genuinely close. But even here there is a catch: independent tests outside the laboratory have found larger errors, and a wrist cuff is fussier about position than an upper-arm cuff. Hold your wrist at the wrong height relative to your heart, and the number moves.

The split matters because the marketing rarely explains it. A watch that estimates with light and a watch that measures with a cuff are different instruments wearing the same name, and only the second behaves like the device in your doctor's office.

## The calibration trap

Most optical watches add a step that sounds reassuring and is, in reality, the heart of the problem: calibration. You take a reading with a real cuff, type the number into the watch's app, and the algorithm adjusts its model to you. Samsung asks for a fresh calibration every 28 days. Whoop asks for three cuff readings at setup and one every 30 days after. Presented as a feature, calibration is really an admission — the watch cannot know your blood pressure on its own, so it borrows the answer from a cuff and then tries to track changes from that borrowed starting point.

The trouble is what happens between calibrations. A careful 28-day study of the Galaxy Watch 5, published in the journal Digital Health in 2026, found that overall agreement with a cuff looked good: the average bias was negligible. But when a participant's true pressure had drifted 10 mmHg away from the value recorded at calibration, the average error grew to 3.4 mmHg systolic and 5.1 mmHg diastolic. In other words, the device was most wrong at exactly the moment it mattered most — when your pressure had actually changed. An earlier study of the Galaxy Watch Active 2, worn alongside 24-hour ambulatory monitoring in 40 people and published in Frontiers in Cardiovascular Medicine in 2022, found the same pattern in a different form: readings were pulled toward the calibration value, overestimating low pressures and underestimating high ones.

That compression effect — low values pushed up, high values pulled down — turns out to be the single most important limitation of cuffless blood pressure, and it appears again and again in independent studies. A study published in the Journal of Human Hypertension in 2021 compared four smartwatches with an arm cuff and found systolic errors ranging from 8 mmHg below to 10 mmHg above the true value, and diastolic errors from 5 below to 7 above. The watches showed the same proportional bias: they overestimated systolic pressure when it was below roughly 140 mmHg and underestimated it above that threshold, while diastolic readings were overestimated across the board. Sensitivity for detecting hypertension was 83 percent, but specificity was only 41 percent — the watches caught most people with high blood pressure but also flagged many people who did not have it.

The pattern is easy to understand once you see it. A model trained on average people returns average-looking answers. It is most confident near the middle of the range and most wrong at the edges. But the edges are where the medicine lives: a person whose pressure has climbed to 150 needs to know it is 150, not to be reassured with a reading of 138. A device that compresses the extremes toward the middle can hide exactly the cases it exists to catch.

<picture>
<source srcset="/img/1505751172876-fa1923c5c528-1000.avif" type="image/avif">
<source srcset="/img/1505751172876-fa1923c5c528-700.webp" type="image/webp">
<img src="/img/1505751172876-fa1923c5c528-700.webp" alt="A stethoscope resting on a white surface" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*A traditional cuff performs a controlled mechanical measurement on the arm. A watch estimates the same number from the shape of a pulse of light.*

## What the numbers look like, study by study

No single study settles the question, because the results depend enormously on which device was tested, how it was tested, and who wore it. Taken together, though, the independent literature tells a consistent story — and it is a story of narrow competence and wide failure modes.

In the laboratory, under controlled conditions and shortly after calibration, some devices come close to clinical-grade accuracy. A 2026 independent validation found that a Samsung Galaxy Watch 5 met the two international accuracy standards for this technology — ISO 81060-2:2018 and IEEE 1708-2019 — on all but one measure across a full calibration cycle. A 2026 study of an upper-arm optical device found it met the universal standard written jointly by the Association for the Advancement of Medical Instrumentation, the European Society of Hypertension, and ISO, with consistent accuracy across age groups and across lighter and darker skin tones. These are real results, and they show the technology is improving.

Outside the laboratory, the picture weakens. A 2025 meta-analysis that compared cuffless devices against 24-hour ambulatory monitoring — the gold-standard method, in which a cuff inflates automatically through the day and night — found genuinely good daytime agreement, with average differences of about 1 mmHg systolic and 0.7 mmHg diastolic. At night, the differences grew to 4.48 mmHg systolic and 5.64 mmHg diastolic, and those night-time numbers matter: blood pressure is supposed to dip while you sleep, and the size of that dip is itself a marker of cardiovascular risk. In one study of 41 people, a wrist device understated the overnight dip by more than 14 mmHg systolic, and in a related test the Hilo band, formerly sold as Aktiia, read night-time systolic pressure 15.5 points too high. A device that cannot track the night cannot be trusted to track the day either, because it is the same sensor and the same arm, only horizontal.

Position moves the number too. In a manufacturer-funded validation of an optical wrist bracelet, systolic bias was small while sitting — 0.46 mmHg on average, though with a wide spread — but the spread ballooned to 12.51 mmHg when participants stood up, and diastolic bias shifted from 0.39 to minus 4.85 mmHg. A separate real-world study found an average error of about 6.8 mmHg after recalibration. The watches are not random number generators. They are instruments whose accuracy depends on conditions that ordinary life violates constantly: standing up, walking, a loose strap, cold hands, a darker skin tone, an irregular heartbeat, a new medication.

That last point deserves emphasis, because it connects directly to the people most likely to buy one. Independent reviews consistently note that PPG readings can be skewed by arrhythmias, by arterial stiffness — which increases with age and with hypertension itself — and by certain medications. The people with the strongest reason to monitor their blood pressure are, in several ways, the people for whom the estimate is least reliable.

There is also new evidence that the field is moving toward detection rather than measurement. A paper published in the journal Nature on 6 November 2026 reported that an AI system reading the optical and motion sensors of a consumer Google smartwatch could detect hypertension with a sensitivity of 65.8 percent, slightly better than the 55.3 percent achieved by standard office cuff measurements in the same comparison, with both methods correctly clearing 90 percent of people who did not have hypertension. The system was trained on nearly 500,000 hours of smartwatch data from 2,109 people and validated in 196 participants against 24-hour ambulatory monitoring. The authors were careful about what they had built: a screening tool that could flag people for follow-up, not a replacement for cuff-based measurement. It is an encouraging result, and it is also a reminder of where the technology actually is — able, sometimes, to notice that something may be wrong, and not yet able to say what the number is.

## What "FDA cleared" really means

If there is one phrase responsible for most of the confusion, it is "FDA cleared". It appears on product pages, in press releases, and in shop listings, and most shoppers read it as "the American government tested this and found it accurate". That is not what it means.

The FDA clears most of these devices through the 510(k) pathway, which asks whether a new device is substantially equivalent to a device already legally sold — not whether its numbers are right in large independent trials. The first over-the-counter cuffless blood pressure system reached the US market through that route in July 2025, as premarket notification K250415, a Class II device. Apple's hypertension notifications were cleared the same way, as 510(k) K250507 on 11 September 2025. Samsung received FDA clearance for blood pressure monitoring on the Galaxy Watch 6 and 7 in March 2026, and the Happy Ring, an optical device that shows numbers without any cuff calibration, was cleared in September 2026. Each clearance is real, and each one is narrower than the advertising suggests.

Apple's clearance is the most instructive, because it is also the most honest about its own limits. The feature does not show a blood pressure number at all. It watches the optical sensor for a pattern over about 30 days and then sends a notification suggesting the wearer may have hypertension and should check with a cuff. It is cleared for over-the-counter use by adults aged 22 and older who have not previously been diagnosed with hypertension, and it is explicitly not intended to replace traditional diagnosis, to monitor the effect of hypertension treatment, or to serve as a method of blood pressure surveillance.

In Apple's pivotal study, which enrolled more than 2,000 adults without a prior hypertension diagnosis who wore the watch at least 12 hours a day for 30 days while taking twice-daily home readings with a validated cuff, the feature caught 41.2 percent of the people who actually had hypertension — sensitivity 41.2 percent, with a 95 percent confidence interval of 37.2 to 45.3 — while correctly clearing 92.3 percent of those who did not. Sensitivity rose to 53.7 percent among people with stage 2 hypertension, the more severe form. Those are respectable numbers for a screening nudge. They are also numbers that mean nearly six in ten people with hypertension received no alert at all.

A research letter in the journal JAMA, written by hypertension researchers Jordana Cohen of the University of Pennsylvania, Daichi Shimbo of Columbia University, and Adam Bress of the University of Utah, applied Apple's figures to a nationally representative sample of 3,983 American adults matching the feature's eligibility criteria — representing about 127 million people. Their modelling found that even among people who received no alert, the chance of having undiagnosed hypertension was 21 percent — and 34 percent for those aged 60 and older. A clean result from the watch, in other words, is not a clean bill of health. It is a coin weighted toward reassurance, and the weight grows heavier with age.

The guideline writers have noticed. The 2025 US hypertension guideline gives cuffless devices a Class 3 recommendation — "No Benefit" — for the diagnosis and management of high blood pressure. An American Heart Association scientific statement published in December 2025 concluded that the devices on the market "have not yet been adequately vetted for accuracy and efficacy" and that currently available devices "may be inappropriate for clinical use", while acknowledging that several are FDA cleared and already being used. The contradiction is only apparent: a device can be cleared for sale, and even useful as a prompt to see a doctor, while still not being a device a clinician should use to make a diagnosis or adjust a drug dose.

## The one exception, and its limits

The honest exception in this market is the watch with a real cuff in the strap. Huawei's Watch D line and Omron's HeartGuide inflate a miniature bladder around the wrist and measure pressure oscillometrically, the same principle as an upper-arm monitor. In validation testing at rest they have passed the international standard for blood pressure monitors, and their readings are measurements in the full sense of the word, not inferences from a light sensor.

Even here, the evidence comes with a footnote. Independent tests outside the laboratory have found larger errors than the controlled validations, and wrist cuffs are more sensitive to position than arm cuffs: the wrist must be held at heart level, the strap must be snug, and the wearer must sit still. None of that makes the devices bad. It makes them what they are — real blood pressure monitors that happen to live on a wrist, with the same discipline required of any cuff, and none of the magic that the word "smartwatch" implies.

It is also worth noting what the cuff-based watches do not do: they do not measure continuously. A measurement takes about half a minute, requires stillness, and cannot run while you sleep or exercise. The dream of a watch that quietly records your pressure all day and night belongs, for now, to the optical estimators — and those are the devices whose numbers are least trustworthy.

<picture>
<source srcset="/img/1550751827-4bd374c3f58b-1000.avif" type="image/avif">
<source srcset="/img/1550751827-4bd374c3f58b-700.webp" type="image/webp">
<img src="/img/1550751827-4bd374c3f58b-700.webp" alt="A close-up of a glowing circuit board with fine electronic traces" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*An optical sensor measures light bouncing off pulsing blood, not pressure itself. Software then infers a number — and the inference depends on your arteries, your skin, your movement, and a calibration you typed in weeks ago.*

## Why the confusion persists

The confusion is not an accident. It is the product of at least four separate gaps, each of which makes the claim look stronger than it is.

The first gap is language. Companies say "blood pressure monitoring" whether the device measures pressure, estimates it from light, or merely watches for a pattern over a month. Consumers hear one word — monitoring — and assume one thing. Regulators, meanwhile, clear devices under indications so narrow that the average shopper would never read them: "not intended to replace traditional methods of diagnosis", "not for monitoring treatment effect", "not a method of blood pressure surveillance". The box says one thing; the clearance letter says another.

The second gap is the difference between a population and a person. A study can report an average error of less than 1 mmHg and still contain individuals whose readings were off by 12 or 15. Averages hide the tails, and medicine happens in the tails — the person whose pressure is 155 and reads as 138, or the person whose pressure is normal and reads as high, and who starts worrying, or worse, adjusting medication, on the strength of a wrist.

The third gap is time. A calibration is a snapshot, and blood pressure is a moving target: it rises with stress, falls with rest, changes with medication, with illness, with the seasons. An estimate anchored to a reading from four weeks ago is an estimate of the person you were four weeks ago. The studies that show the largest errors are the ones that let the most time pass since calibration, which is exactly what real owners do.

The fourth gap is the cheapest watches. The devices discussed so far are made by Samsung, Apple, Huawei, and Omron — companies with regulatory filings and published validation studies. The online marketplaces are full of watches that cost a tenth as much and promise the same feature with no filings, no studies, and no calibration at all. Their numbers are not estimates in the sense that Samsung's are estimates. They are closer to decoration. If a watch you have never heard of, from a brand with no support page, promises medical-grade blood pressure on your wrist for the price of a dinner, the honest answer is that it is not measuring anything at all.

It is a pattern familiar from other wearable health promises. We have examined the same gap before on this site: the question of whether <a href="/blog/do-led-face-masks-work-fact-check/">do LED face masks work</a>, where a real technology with narrow evidence is sold as a broad cure-all, and the question of <a href="/blog/ten-thousand-steps-rule-fact-check/">the 10,000-step rule</a>, where a round number invented for marketing became medical advice. Wearables are good at counting things that can be counted directly — steps, beats, hours asleep. Blood pressure is not one of those things, and the industry has spent a decade trying to make it look like one.

## The Verdict

**Misleading.** Do smartwatches measure blood pressure accurately? For the watches most people actually buy, the answer is no — not in the way the question means it.

Only watches with a miniature inflatable cuff in the strap, such as Huawei's Watch D and Omron's HeartGuide, genuinely measure blood pressure, and even those perform best at rest, with correct positioning, and with larger errors outside the laboratory. Every other consumer smartwatch estimates it: Samsung's Galaxy Watch and similar optical devices infer a number from the pulse waveform and need a cuff calibration every four weeks, with errors that grow as your real pressure drifts away from the calibration value; Apple's much-publicised feature never shows a number at all, and in its own pivotal study it flagged only 41.2 percent of the people who actually had hypertension. The 2025 US hypertension guideline recommends against using cuffless devices for diagnosis or management, and the American Heart Association's scientific statement says the devices on the market have not yet been adequately vetted for accuracy and efficacy.

None of that makes the technology worthless. A watch that notices a pattern over a month and tells you to see a doctor has real value — that is exactly what Apple's notification is designed to do, and the new Nature study suggests AI-assisted screening will keep getting better. But a screening nudge is not a measurement, an estimate is not a reading, and a clearance letter is not a clinical validation. The claim as it is sold — a watch that measures your blood pressure accurately — is misleading, because the only watches that measure it accurately are the ones with a cuff, and the watches most people wear do not have one.

## What to use instead

The unglamorous answer is the one your doctor has been giving for years: a validated upper-arm cuff, used properly. Buy one that appears on a validated-device list such as STRIDE BP, use the correct cuff size for your arm, sit with your back supported and your feet flat, rest for five minutes, keep the cuff at heart level, do not talk, and take two readings a minute or two apart. That procedure, repeated over a week, gives you and your doctor a picture no watch can currently match.

If you already own a smartwatch with a blood pressure feature, you do not need to throw it away. Use it for what it is good at: noticing trends, and prompting you to check with a real cuff when something looks different. Keep the calibration current — every four weeks, not every four months — and never adjust a medication, skip a dose, or cancel an appointment because of a number on your wrist. And if the watch tells you that your pressure is high, believe it enough to check with a cuff, and if the watch tells you that everything is fine, remember the JAMA modelling: among people who received no alert from Apple's feature, one in five still had undiagnosed hypertension, and among those over 60, one in three.

There is a final, quieter point. The question people type into a search engine — do smartwatches measure blood pressure accurately — is really two questions. The first is about engineering: can a sensor on a wrist read the pressure inside an artery? The answer, for now, is barely, and only with help. The second is about trust: can I believe the number on my wrist? The answer is that you can believe it as a hint and a habit, and you should not believe it as a diagnosis. The wrist is a wonderful place to count heartbeats. For blood pressure, the upper arm still wins — and it will keep winning until a watch can do what a cuff does, which is to squeeze, to listen, and to measure what is actually there.

<picture>
<source srcset="/img/1526374965328-7f61d4dc18c5-1000.avif" type="image/avif">
<source srcset="/img/1526374965328-7f61d4dc18c5-700.webp" type="image/webp">
<img src="/img/1526374965328-7f61d4dc18c5-700.webp" alt="Abstract digital code pattern representing the data behind a wearable's health estimates" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*The gap between a population average and a single person's reading is where the medicine happens — and where averages can hide errors of 10 or 15 points.*

<picture>
<source srcset="/img/1576091160550-2173dba999ef-1000.avif" type="image/avif">
<source srcset="/img/1576091160550-2173dba999ef-700.webp" type="image/webp">
<img src="/img/1576091160550-2173dba999ef-700.webp" alt="A laptop showing a telehealth consultation with a stethoscope beside it" width="1000" height="563" loading="lazy" decoding="async">
</picture>

*If your watch flags high blood pressure, the right next step is a validated cuff — and a conversation with a clinician, not a settings menu.*

The most dangerous number in medicine is not a wrong one. It is a wrong one you trust completely, because it arrived on a screen you look at a hundred times a day, in a font designed to inspire confidence. Your watch can tell you many true things about your body. Blood pressure, accurately, is not yet one of them — and the companies that know this best are the ones whose clearest, most honest feature is the one that refuses to show you a number at all.
