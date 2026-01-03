# Flow — A Zoomer-Native Project Management App

> "Work should feel like play, progress should feel like art."

---

## Design Philosophy

This isn't another productivity tool. It's a **creative environment** where work happens to get done. The vibe is closer to a music app or game than enterprise software.

### Anti-Patterns (What We're NOT Building)
- ❌ Dashboard hell with 47 widgets
- ❌ Corporate blue gradients
- ❌ Gantt charts and spreadsheet views
- ❌ "Synergy" and "leverage" energy
- ❌ Notification anxiety machines
- ❌ Feature bloat disguised as power

### Core Vibes
- ✨ **Atmospheric** — feels like a space you want to be in
- 🌊 **Fluid** — everything moves, breathes, responds
- 🎯 **Focused** — one thing at a time, beautifully
- 🏆 **Rewarding** — completing work feels *good*
- 🌙 **Calm** — no red badges screaming at you

---

## Visual Identity

### Color Philosophy
Not a fixed palette—a **mood system**:

```
Dawn     → Soft peaches, warm whites (morning energy)
Flow     → Deep purples, electric blues (focus state)
Golden   → Amber, honey, warm neutrals (afternoon calm)
Midnight → True blacks, soft glows (late night grinding)
```

The app subtly shifts based on time of day and user's work patterns. No jarring theme toggles—organic transitions.

### Typography
- **Display**: Something with personality (Variable font with weight/width axes)
  - Consider: Satoshi, General Sans, or a custom variable font
- **Body**: Clean but warm, not clinical
  - Consider: Inter with optical sizing, or Cabinet Grotesk
- **Mono**: For tags/labels—something that feels intentional
  - Consider: JetBrains Mono, Berkeley Mono

### Space & Layout
- **Generous whitespace** — let elements breathe
- **Asymmetric grids** — not everything aligned to a 12-column prison
- **Layered depth** — subtle shadows, glassmorphism where it serves function
- **Full-bleed moments** — let content expand, contract, surprise

---

## Core Features

### 1. The Stream (Home)
Not a dashboard. A **living feed** of your work life.

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│       "You're 3 tasks from closing out         │
│        the redesign. Let's go."                │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                 │
│  ┌──────────────────┐  ┌──────────────────┐    │
│  │ ◉ Quick win      │  │ ◐ In progress    │    │
│  │ Fix header bug   │  │ User research    │    │
│  │ ~15 min          │  │ 2h deep work     │    │
│  └──────────────────┘  └──────────────────┘    │
│                                                 │
│  ════════════════════════════════════════════  │
│  This week you completed 12 tasks              │
│  [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░] 73%             │
│  ════════════════════════════════════════════  │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Key elements:**
- Contextual greeting that changes based on time/progress
- Suggested "next action" based on energy level (quick win vs deep work)
- Visual progress that fills like a gas tank, not a spreadsheet
- Ambient background that subtly shifts

### 2. Projects as Worlds
Each project is a **contained universe** with its own:
- Color accent / mood
- Cover image or generative art background
- Ambient sound option (lo-fi, nature, silence)
- Progress visualization unique to project type

**Project Views:**

#### a) The Garden View (Default)
Tasks as growing plants. Completed = bloomed. Overdue = wilting (but gentle, not aggressive).

```
     🌸          🌱     🌿
    done      started   new
      \         |        /
  ════════════════════════════
         project soil
```

#### b) The Path View
Linear journey from start to finish. You see where you are, where you've been.

```
◉────●────●────○────○────○────◎
^              ^              ^
start        you           finish
```

#### c) Stack View
For quick task triage. Tinder-style swipe through tasks.
- Swipe right: Do today
- Swipe left: Later
- Swipe up: Delegate
- Swipe down: Delete

### 3. Focus Mode
When you start working on a task, everything else fades.

```
┌─────────────────────────────────────────────────┐
│                                                 │
│                                                 │
│                                                 │
│           Write API documentation               │
│                                                 │
│              ◉ 47:23 remaining                  │
│                                                 │
│         [ambient gradient background            │
│          slowly shifting]                       │
│                                                 │
│                                                 │
│              ▽ show subtasks                    │
│                                                 │
└─────────────────────────────────────────────────┘
```

- Integrated pomodoro (but not forced)
- Optional ambient sounds
- Minimal UI—just you and the work
- Subtle breathing animation to keep you calm

### 4. The Ritual (Daily Planning)
Morning check-in that takes 60 seconds, not 10 minutes.

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  Good morning. Let's set intentions.            │
│                                                 │
│  What's the ONE thing today?                    │
│  ┌─────────────────────────────────────────┐   │
│  │ Ship the landing page                    │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  Energy level?                                  │
│  ○ ○ ◉ ○ ○                                     │
│  low     high                                   │
│                                                 │
│  [Start Day →]                                  │
│                                                 │
└─────────────────────────────────────────────────┘
```

### 5. Wins & Reflections
End of day/week celebrations that feel earned.

```
┌─────────────────────────────────────────────────┐
│                                                 │
│         ✧ Week Complete ✧                       │
│                                                 │
│    ┌─────────────────────────────┐             │
│    │                             │             │
│    │   [generative art based    │             │
│    │    on your week's work]    │             │
│    │                             │             │
│    └─────────────────────────────┘             │
│                                                 │
│    14 tasks completed                           │
│    3 projects moved forward                     │
│    Best streak: 4 days                          │
│                                                 │
│    "Momentum is built one day                   │
│     at a time. You showed up."                  │
│                                                 │
│    [Save artwork] [Share]                       │
│                                                 │
└─────────────────────────────────────────────────┘
```

**The twist:** Each week generates unique art based on your work patterns. Shareable, collectible, personal.

### 6. Multiplayer (Collaboration)
Not "team workspace"—**shared spaces**.

- See teammates as **presence dots** (like Figma, but subtler)
- Leave **voice notes** on tasks instead of comment threads
- **Reactions** instead of status updates (🔥 = on it, 👀 = looking, ✅ = done)
- **Async standups** as 15-second video bubbles

---

## Motion & Interaction Design

### Principles
1. **Physics-based** — everything has mass and momentum
2. **Continuity** — elements don't pop in/out, they transform
3. **Response** — instant feedback, no waiting
4. **Restraint** — motion serves function, never decoration

### Key Animations

#### Task Completion
```
[task card]
    ↓ tap complete
[satisfying squish → particles burst → card gracefully exits]
    ↓
[next task slides up with gentle bounce]
```

#### Progress Fill
```
[progress bar fills with liquid physics]
[slight overshoot → settle back → subtle glow pulse]
```

#### Page Transitions
```
[content morphs, doesn't cut]
[shared elements animate between states]
[background gradient cross-fades]
```

#### Micro-interactions
- Buttons: subtle scale + shadow shift on hover
- Cards: lift and tilt toward cursor (3D transform)
- Inputs: focus state expands gently
- Toggle: liquid slide with haptic feedback on mobile

### Sound Design (Optional Layer)
- Soft "pop" on task complete
- Gentle "whoosh" on navigation
- Achievement unlocks with musical motif
- All optional, off by default, but delightful when enabled

---

## Technical Architecture

### Stack

```
┌─────────────────────────────────────────────────┐
│                   Frontend                       │
├─────────────────────────────────────────────────┤
│  Next.js 14 (App Router)                        │
│  - React Server Components for speed            │
│  - Edge runtime for global performance          │
│  - Streaming for perceived performance          │
├─────────────────────────────────────────────────┤
│  Styling                                         │
│  - Tailwind CSS (utility foundation)            │
│  - CSS Variables (dynamic theming)              │
│  - Framer Motion (physics animations)           │
│  - Custom CSS for complex effects               │
├─────────────────────────────────────────────────┤
│  State & Data                                    │
│  - Zustand (client state, minimal)              │
│  - TanStack Query (server state)                │
│  - Optimistic updates everywhere                │
├─────────────────────────────────────────────────┤
│  Real-time                                       │
│  - Liveblocks or PartyKit (presence/collab)     │
│  - WebSocket for live updates                   │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                   Backend                        │
├─────────────────────────────────────────────────┤
│  Database                                        │
│  - Postgres (Neon or Supabase)                  │
│  - Drizzle ORM (type-safe, lightweight)         │
├─────────────────────────────────────────────────┤
│  Auth                                            │
│  - Clerk or Auth.js                             │
│  - Social logins (Google, GitHub, Apple)        │
│  - Magic links (no passwords)                   │
├─────────────────────────────────────────────────┤
│  File Storage                                    │
│  - Uploadthing or Cloudflare R2                 │
│  - For avatars, attachments, generated art      │
├─────────────────────────────────────────────────┤
│  Infrastructure                                  │
│  - Vercel (frontend + edge functions)           │
│  - Railway or Fly.io (if need dedicated server) │
└─────────────────────────────────────────────────┘
```

### Project Structure

```
/app
  /(auth)
    /login
    /signup
  /(app)
    /stream          → home feed
    /projects
      /[id]          → project world
    /focus/[taskId]  → focus mode
    /ritual          → daily planning
    /wins            → reflections
    /settings
  /api
    /...

/components
  /ui               → primitives (button, input, card)
  /patterns         → composed (task-card, project-cover)
  /motion           → animation wrappers
  /layouts          → page shells

/lib
  /db               → database client & queries
  /auth             → auth utilities
  /hooks            → custom React hooks
  /utils            → helpers
  /constants        → app-wide constants

/styles
  /tokens           → design tokens (colors, spacing)
  /animations       → keyframe definitions
  globals.css

/public
  /sounds           → optional audio
  /fonts            → self-hosted fonts
```

---

## Implementation Phases

### Phase 1: Foundation (Core Loop)
The minimum to feel the vision:
- [ ] Project setup (Next.js, Tailwind, basic config)
- [ ] Design tokens & theme system
- [ ] Core UI primitives (button, input, card)
- [ ] Auth flow (signup, login, magic link)
- [ ] Database schema (users, projects, tasks)
- [ ] Stream view (basic home)
- [ ] Single project view
- [ ] Task creation & completion with satisfying animation
- [ ] Basic responsive layout

### Phase 2: Emotional Layer
The stuff that makes it *feel* different:
- [ ] Focus mode with timer
- [ ] Daily ritual (morning intention setting)
- [ ] Progress visualizations (garden or path view)
- [ ] Ambient theme system (time-of-day shifting)
- [ ] Task completion celebration particles
- [ ] Sound design (optional toggle)
- [ ] Weekly wins summary

### Phase 3: Multiplayer
Working together:
- [ ] Team/workspace creation
- [ ] Real-time presence
- [ ] Voice notes on tasks
- [ ] Reactions system
- [ ] Async video standups
- [ ] Shared project spaces

### Phase 4: Delight & Polish
The 10% that's 90% of the feeling:
- [ ] Generated weekly art
- [ ] Streak tracking & gentle nudges
- [ ] Keyboard shortcuts (power users)
- [ ] Mobile app (PWA first, native later)
- [ ] Widget for phone home screen
- [ ] Customizable themes/accents
- [ ] Import from other tools

---

## Data Model (Initial Schema)

```sql
-- Users
users
  id            uuid primary key
  email         text unique
  name          text
  avatar_url    text
  theme_pref    text          -- dawn, flow, golden, midnight, auto
  created_at    timestamp

-- Workspaces (personal or team)
workspaces
  id            uuid primary key
  name          text
  slug          text unique
  owner_id      uuid references users
  type          text          -- personal, team
  created_at    timestamp

-- Workspace members
workspace_members
  workspace_id  uuid references workspaces
  user_id       uuid references users
  role          text          -- owner, admin, member
  joined_at     timestamp
  primary key (workspace_id, user_id)

-- Projects
projects
  id            uuid primary key
  workspace_id  uuid references workspaces
  name          text
  description   text
  color         text          -- accent color
  cover_url     text          -- optional cover image
  view_type     text          -- garden, path, stack
  status        text          -- active, archived, completed
  created_at    timestamp

-- Tasks
tasks
  id            uuid primary key
  project_id    uuid references projects
  title         text
  description   text
  status        text          -- todo, in_progress, done
  energy        text          -- quick, medium, deep
  due_date      date
  completed_at  timestamp
  created_by    uuid references users
  assigned_to   uuid references users
  position      integer       -- for ordering
  created_at    timestamp

-- Daily rituals
rituals
  id            uuid primary key
  user_id       uuid references users
  date          date
  intention     text          -- the ONE thing
  energy_level  integer       -- 1-5
  reflection    text          -- end of day
  created_at    timestamp

-- Weekly summaries (for generated art)
weekly_summaries
  id            uuid primary key
  user_id       uuid references users
  week_start    date
  tasks_completed  integer
  projects_touched integer
  streak_days   integer
  art_seed      text          -- seed for generative art
  art_url       text          -- saved image
  created_at    timestamp
```

---

## What Makes This Different

| Traditional PM Tools | Flow |
|---------------------|------|
| Information density | Intentional space |
| Feature accumulation | Feature restraint |
| Anxiety-inducing badges | Calm progress indicators |
| "Professional" aesthetic | Emotional, personal aesthetic |
| Dashboards | Living streams |
| Completed = checkbox | Completed = celebration |
| Time tracking | Energy tracking |
| Reports | Reflections |
| Notifications | Gentle nudges |
| Team workspace | Shared space |

---

## Open Questions

1. **Monetization model?**
   - Freemium (personal free, teams paid)?
   - Single tier with fair pricing?
   - Pay for power features?

2. **Mobile strategy?**
   - PWA first, native later?
   - Native from day one?
   - Mobile-only initially?

3. **AI integration?**
   - Task suggestions based on patterns?
   - Auto-prioritization?
   - Or keep it human-first?

4. **Social features?**
   - Public profiles/streaks?
   - Community features?
   - Or keep it private/team-only?

---

## Next Steps

Pending your approval of this plan, I'll begin with Phase 1:
1. Initialize Next.js project with TypeScript
2. Set up Tailwind + design token system
3. Create core UI components
4. Implement auth flow
5. Build database schema
6. Create the Stream (home) and basic project views

Ready when you are.
