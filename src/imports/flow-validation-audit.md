PROMPT START

You are designing UI for an already partially designed premium contractor marketplace platform.

IMPORTANT:
This project already has existing screens and flows designed.
Your task is NOT to redesign from scratch.

Your task is to:

Analyze the provided product logic.

Compare it with the existing flow structure.

Check whether the current UX flow logically matches the required system behavior.

If a screen or logic already exists and matches → DO NOT change structure.

Only add missing states, missing screens, or UX clarity improvements where required.

Make minimal adjustments only when logical mismatch exists.

Do not introduce new features.
Do not change business rules.
Do not simplify core marketplace mechanics.

Tone:
Premium, serious, contractor-grade platform.
Not startup playful.

Platform Type:
Contractor Marketplace

Primary Users:

Homeowner

Contractor

Admin (basic control panel)

Design Style:

Clean SaaS marketplace

Professional construction industry aesthetic

Minimal color usage

Strong typography hierarchy

High trust visual language

Desktop-first responsive system

Use a strict 12-column grid system.

GLOBAL PRODUCT RULES (MUST MATCH EXISTING FLOW)

No pricing visible publicly on homepage

Primary CTA = “Post Your Project”

Maximum 5 quotes per job

Privacy protection before chat acceptance

Phone verification required before user actions

Contractor subscription required for routing

Quotes become permanently locked after submission

Messaging unlocks only after homeowner acceptance

If existing flow already satisfies these → keep unchanged.

FLOW VALIDATION MODE (VERY IMPORTANT)

Before generating or modifying UI:

Audit whether these flows exist visually:

✓ Phone verification state
✓ Job posting → automatic contractor routing
✓ 24-hour job countdown
✓ 5-quote slot reservation system
✓ Locked quote state after submission
✓ Chat locked → chat unlocked transition
✓ Reopen job logic (one-time reopen)

If any state is missing:
ADD ONLY THE NECESSARY SCREEN OR UI STATE.

Do not restructure navigation unless required.

REQUIRED SCREEN ALIGNMENT
1. HOMEPAGE

Verify existence of:

Premium hero section

Trust messaging

How it works (3 steps)

Verified contractor explanation

Primary CTA: Post Your Project

Footer

If present → improve hierarchy only.

No pricing displayed.

2. HOMEOWNER FLOW (MATCH EXISTING)
Account Creation

Ensure fields exist:

First Name

Last Name

Email

Password

Phone verification state UI

Add verification success/loading/error states if missing.

Post Job Wizard

Ensure multi-step structure exists:

Step 1 — Project Info

Project Type

ZIP Code

Budget Range

Start Timeframe

Step 2 — Details

Description

Character counter

Helper text

Step 3 — Media Upload

Photo upload (3–20)

Optional video

Step 4 — Optional Metrics

Square footage

Linear feet

Step 5 — Confirmation

Hiring intent checkbox

Submit

If steps already exist → keep layout, only improve clarity.

After submission ensure:

Job Status = OPEN

Visible 24h countdown timer

Add status UI if missing.

Homeowner Dashboard

Verify presence of:

Active jobs list

Quote cards (max 5)

Status indicators

Reopen button logic

Quote Card must show:

Contractor name

Price range

Timeline

Message preview

Accept / Decline actions

Add CHAT LOCKED visual state if missing.

3. CONTRACTOR FLOW
Signup

Verify fields:

Company Name

Owner Name

Email

Password

Phone verification

Compliance Upload

Check upload areas exist:

License

Insurance

Bond

Expiration dates

Workers comp dropdown

Ensure status badge:
Pending / Approved / Rejected.

Trade Selection

Multi-select required.

Pricing Structure Setup

Dynamic fields based on trade.

Ensure:

Minimum job fee

Labor rate type

Conditional pricing fields

Add missing conditional UI logic if absent.

Contractor Dashboard

Verify sections:

Available Jobs

Reserved Slots

Submitted Quotes

Subscription Status

Job card must show:

Trade

ZIP

Budget Tier (not exact amount)

Start Quote CTA

Quote Form

Ensure required fields exist:

Labor range

Materials range

Finish materials option

Permit cost

Timeline

Quote validity

Assumptions

Quote message

Show auto-calculated total.

After submit:
Display LOCKED QUOTE state clearly.

4. MESSAGING SYSTEM

Verify two states:

State 1:
Quote submitted → Chat locked

State 2:
Homeowner accepts → Chat unlocked

Add privacy indicators if missing.

5. PRO UPGRADE UI

Verify upgrade modal includes:

Contract storage

Change orders

Manual payment tracking

Permit storage

Progress photos

Vision board

Add only if missing.

OUTPUT REQUIREMENTS

Maintain existing navigation structure.

Add missing states instead of redesigning.

Improve spacing, hierarchy, readability only.

Keep professional marketplace tone.

Organize frames by user role.

Focus on FLOW COMPLETION, not redesign.