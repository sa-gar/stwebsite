import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Star,
  MapPin,
  Clock3,
  Users,
  BookOpen,
  ChevronRight,
  Filter,
  Menu,
  X,
  MessageSquare,
  ShieldCheck,
  GraduationCap,
  Dumbbell,
  Music,
  Code2,
  Languages,
  HeartHandshake,
  CalendarDays,
  Wallet,
  CheckCircle2,
  UserCircle2,
  LayoutDashboard,
  Briefcase,
  Bell,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Badge } from "./components/ui/badge";
import { Avatar, AvatarFallback } from "./components/ui/avatar";


const categories = [
  { name: "Academic Tutors", icon: GraduationCap, count: "12,400+ experts" },
  { name: "Spoken English", icon: Languages, count: "4,200+ experts" },
  { name: "Music Classes", icon: Music, count: "3,100+ experts" },
  { name: "Programming", icon: Code2, count: "5,600+ experts" },
  { name: "Fitness Trainers", icon: Dumbbell, count: "2,800+ experts" },
  { name: "Soft Skills", icon: HeartHandshake, count: "1,900+ experts" },
];

const tutors = [
  {
    id: 7,
  name: "Er. Aditya Raj Kalwar",
  subject: "Data Structures, Deep Learning, NLP, Computer Vision",
  mode: "Online & Offline",
  location: "Electronic City Phase II, Bengaluru — 560100",
  price: 1200,
  rating: 4.9,
  reviews: 210,
  verified: true,
  experience: "7.2+ years",
  tagline: "AI & Machine Learning specialist with industry-focused training",
  languages: ["English", "Kannada", "Telugu", "Hindi"],
  category: "Programming",
  students: 320,
  responseTime: "30 mins",
  availability: ["Mon 7 PM", "Wed 6 PM", "Sat 11 AM"],
  about:
    "MCA with specialization in Machine Learning and AI. Experienced in teaching Data Structures, Deep Learning, NLP, Computer Vision, Neural Networks, and Big Data Analytics with strong practical and industry-oriented training.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    subject: "Spoken English, IELTS",
    mode: "Online",
    location: "Delhi",
    price: 399,
    rating: 4.8,
    reviews: 94,
    verified: true,
    experience: "6 years",
    tagline: "Confident communication for students and professionals",
    languages: ["English", "Hindi"],
    category: "Spoken English",
    students: 180,
    responseTime: "35 mins",
    availability: ["Tue 8 PM", "Thu 8 PM", "Sun 10 AM"],
    about:
      "Focused on fluency, pronunciation, interview confidence, and business communication with practical speaking exercises.",
  },
  {
    id: 3,
    name: "Meera Iyer",
    subject: "Classical Vocal",
    mode: "Online & Studio",
    location: "Chennai",
    price: 699,
    rating: 5.0,
    reviews: 63,
    verified: true,
    experience: "10 years",
    tagline: "Personalized Carnatic vocal coaching for all ages",
    languages: ["English", "Tamil"],
    category: "Music Classes",
    students: 92,
    responseTime: "1 hour",
    availability: ["Fri 6 PM", "Sat 4 PM", "Sun 9 AM"],
    about:
      "Works with beginners and advanced learners on voice culture, repertoire building, and performance readiness.",
  },
  {
    id: 4,
    name: "Arjun Patel",
    subject: "Python, Web Development",
    mode: "Online",
    location: "Hyderabad",
    price: 799,
    rating: 4.9,
    reviews: 156,
    verified: true,
    experience: "7 years",
    tagline: "Project-based coding classes for teens and beginners",
    languages: ["English", "Hindi", "Gujarati"],
    category: "Programming",
    students: 310,
    responseTime: "15 mins",
    availability: ["Mon 8 PM", "Thu 7 PM", "Sat 3 PM"],
    about:
      "Teaches coding through hands-on projects, portfolio building, and clear mentorship for beginners and career switchers.",
  },
  {
    id: 5,
    name: "Nisha Kapoor",
    subject: "Yoga & Weight Loss",
    mode: "Home & Online",
    location: "Mumbai",
    price: 599,
    rating: 4.7,
    reviews: 88,
    verified: false,
    experience: "5 years",
    tagline: "Flexible routines for working professionals",
    languages: ["English", "Hindi"],
    category: "Fitness Trainers",
    students: 140,
    responseTime: "50 mins",
    availability: ["Daily 7 AM", "Mon-Fri 7 PM"],
    about:
      "Creates realistic wellness plans with guided sessions, mobility work, and progress tracking for busy schedules.",
  },
  {
    id: 6,
    name: "Sandeep Roy",
    subject: "Public Speaking",
    mode: "Online",
    location: "Kolkata",
    price: 549,
    rating: 4.8,
    reviews: 71,
    verified: true,
    experience: "9 years",
    tagline: "Interview, presentation, and leadership communication",
    languages: ["English", "Bengali", "Hindi"],
    category: "Soft Skills",
    students: 165,
    responseTime: "25 mins",
    availability: ["Tue 7 PM", "Fri 8 PM", "Sun 11 AM"],
    about:
      "Helps learners improve articulation, confidence, and executive presence for speaking in academic and professional settings.",
  },
];

const requirements = [
  {
    id: 101,
    learner: "Priya",
    need: "Need a Class 10 math tutor near Whitefield",
    budget: "₹400-600/hr",
    posted: "3 mins ago",
    mode: "At my place",
    status: "Open",
  },
  {
    id: 102,
    learner: "Kunal",
    need: "Looking for spoken English classes online",
    budget: "₹300-500/hr",
    posted: "8 mins ago",
    mode: "Online",
    status: "Matched",
  },
  {
    id: 103,
    learner: "Aditi",
    need: "Searching for beginner guitar trainer in Pune",
    budget: "₹500-900/hr",
    posted: "12 mins ago",
    mode: "Flexible",
    status: "Open",
  },
];

const bookingsSeed = [
  { id: 1, tutor: "Arjun Patel", learner: "Riya", slot: "Today, 7:00 PM", type: "Demo class", status: "Confirmed" },
  { id: 2, tutor: "Ananya Sharma", learner: "Kabir", slot: "Tomorrow, 6:30 PM", type: "Trial session", status: "Pending" },
  { id: 3, tutor: "Rahul Verma", learner: "Neha", slot: "Saturday, 10:00 AM", type: "Consultation", status: "Confirmed" },
];

const stats = [
  { label: "Verified tutors", value: "25,000+" },
  { label: "Live learner requests", value: "8,400+" },
  { label: "Cities covered", value: "120+" },
  { label: "Reviews posted", value: "1.2L+" },
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="mb-2 text-sm font-medium text-slate-500">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-base leading-7 text-slate-600">{subtitle}</p> : null}
    </div>
  );
}

function Modal({ open, onClose, children, title }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <motion.div initial={{ y: 20, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 10, opacity: 0 }} className="w-full max-w-2xl rounded-[28px] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <button onClick={onClose} className="rounded-xl border border-slate-200 p-2"><X className="h-4 w-4" /></button>
            </div>
            <div className="p-6">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function TutorCard({ tutor, onViewProfile, onBook }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden rounded-3xl border-0 shadow-sm ring-1 ring-slate-200">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-14 w-14 rounded-2xl">
                <AvatarFallback className="rounded-2xl bg-slate-100 text-sm font-semibold text-slate-800">
                  {tutor.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg font-semibold text-slate-900">{tutor.name}</h3>
                  {tutor.verified ? (
                    <Badge className="rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                      <ShieldCheck className="mr-1 h-3.5 w-3.5" /> Verified
                    </Badge>
                  ) : null}
                </div>
                <p className="text-sm text-slate-600">{tutor.subject}</p>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 px-3 py-2 text-right">
              <div className="text-sm font-semibold text-slate-900">₹{tutor.price}/hr</div>
              <div className="text-xs text-slate-500">Starting fee</div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-600">{tutor.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tutor.languages.map((lang) => (
              <Badge key={lang} variant="secondary" className="rounded-full bg-slate-100 text-slate-700 hover:bg-slate-100">
                {lang}
              </Badge>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-600">
            <div className="flex items-center gap-2"><Star className="h-4 w-4" /> {tutor.rating} ({tutor.reviews} reviews)</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {tutor.location}</div>
            <div className="flex items-center gap-2"><Clock3 className="h-4 w-4" /> {tutor.experience}</div>
            <div className="flex items-center gap-2"><Users className="h-4 w-4" /> {tutor.mode}</div>
          </div>

          <div className="mt-6 flex gap-3">
            <Button className="flex-1 rounded-2xl bg-slate-900 text-white hover:bg-slate-800" onClick={() => onBook(tutor)}>Request Demo</Button>
            <Button variant="outline" className="flex-1 rounded-2xl" onClick={() => onViewProfile(tutor)}>View Profile</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function HomePage({ onNavigate }) {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-white to-white" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <Badge className="mb-5 w-fit rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm hover:bg-white">
              Full marketplace starter inspired by UrbanPro
            </Badge>
            <h1 className="max-w-2xl text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Learn, teach, and book classes from one platform.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              A more complete app prototype with learner browsing, tutor profiles, booking flow, dashboard views, role-based UI, and admin-style analytics.
            </p>

            <div className="mt-8 rounded-[28px] bg-white p-4 shadow-xl ring-1 ring-slate-200">
              <div className="grid gap-3 md:grid-cols-[1.2fr_1fr_auto]">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input className="h-12 rounded-2xl border-slate-200 pl-11" placeholder="What do you want to learn?" />
                </div>
                <Input className="h-12 rounded-2xl border-slate-200" placeholder="Your city or Online" />
                <Button className="h-12 rounded-2xl bg-slate-900 px-6 hover:bg-slate-800" onClick={() => onNavigate("browse")}>Search</Button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-500">
                <span>Trending:</span>
                {categories.slice(0, 5).map((c) => (
                  <button key={c.name} className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700 transition hover:bg-slate-200" onClick={() => onNavigate("browse")}>
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Verified tutors</div>
              <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Demo booking flow</div>
              <div className="flex items-center gap-2"><LayoutDashboard className="h-4 w-4" /> Tutor & admin dashboards</div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <Card key={stat.label} className="rounded-3xl border-0 bg-white shadow-sm ring-1 ring-slate-200">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                  <div className="mt-2 text-sm text-slate-500">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
            <Card className="sm:col-span-2 rounded-3xl border-0 bg-slate-900 text-white shadow-xl">
              <CardContent className="p-7">
                <p className="text-sm text-slate-300">Live learner activity</p>
                <div className="mt-4 space-y-3">
                  {requirements.map((request) => (
                    <div key={request.id} className="rounded-2xl bg-white/10 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-medium">{request.need}</p>
                        <span className="text-xs text-slate-300">{request.posted}</span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-sm text-slate-300">
                        <span>{request.learner}</span>
                        <span>{request.budget}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Browse"
            title="Popular categories"
            subtitle="Explore top searched tutor and trainer categories across academics, skills, and hobbies."
          />
          <Button variant="outline" className="w-fit rounded-2xl" onClick={() => onNavigate("browse")}>Explore all</Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button whileHover={{ y: -4 }} key={category.name} onClick={() => onNavigate("browse")} className="rounded-3xl bg-white p-5 text-left shadow-sm ring-1 ring-slate-200 transition">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                  <Icon className="h-5 w-5 text-slate-700" />
                </div>
                <div className="font-semibold text-slate-900">{category.name}</div>
                <div className="mt-1 text-sm text-slate-500">{category.count}</div>
              </motion.button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle eyebrow="Roles" title="Three core platform experiences" subtitle="This prototype includes learner-facing discovery, tutor-side lead management, and admin-level monitoring." />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Learner", "Search tutors, compare profiles, book demos, and track requests.", UserCircle2],
            ["Tutor", "Review leads, respond to enquiries, manage sessions, and view stats.", Briefcase],
            ["Admin", "Monitor platform metrics, bookings, approvals, and marketplace health.", LayoutDashboard],
          ].map(([title, text, Icon]) => (
            <Card key={title} className="rounded-3xl border-0 shadow-sm ring-1 ring-slate-200">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                  <Icon className="h-5 w-5 text-slate-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

function BrowsePage({ onViewProfile, onBook }) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [onlineOnly, setOnlineOnly] = useState(false);

  const filteredTutors = useMemo(() => {
    return tutors.filter((tutor) => {
      const matchesQuery =
        tutor.name.toLowerCase().includes(query.toLowerCase()) ||
        tutor.subject.toLowerCase().includes(query.toLowerCase()) ||
        tutor.location.toLowerCase().includes(query.toLowerCase()) ||
        tutor.category.toLowerCase().includes(query.toLowerCase());

      const matchesCategory = selectedCategory === "All" || tutor.category === selectedCategory;
      const matchesVerified = !verifiedOnly || tutor.verified;
      const matchesOnline = !onlineOnly || tutor.mode.toLowerCase().includes("online");
      return matchesQuery && matchesCategory && matchesVerified && matchesOnline;
    });
  }, [query, selectedCategory, verifiedOnly, onlineOnly]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle eyebrow="Browse tutors" title="Find your best tutor match" subtitle="Filter by category, search by city or subject, and compare expert profiles quickly." />
        <div className="flex flex-wrap gap-3">
          <div className="relative min-w-[260px]">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} className="h-12 rounded-2xl pl-11" placeholder="Search subject, city, or tutor" />
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4">
            <Filter className="h-4 w-4 text-slate-500" />
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="h-12 bg-transparent outline-none">
              <option>All</option>
              {categories.map((category) => (
                <option key={category.name}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <Card className="h-fit rounded-3xl border-0 shadow-sm ring-1 ring-slate-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900">Quick filters</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <label className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <span>Verified only</span>
                <input type="checkbox" checked={verifiedOnly} onChange={(e) => setVerifiedOnly(e.target.checked)} />
              </label>
              <label className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <span>Online classes</span>
                <input type="checkbox" checked={onlineOnly} onChange={(e) => setOnlineOnly(e.target.checked)} />
              </label>
              <label className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <span>Trial available</span>
                <input type="checkbox" defaultChecked />
              </label>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <p className="text-sm font-medium text-slate-900">Price range</p>
              <div className="mt-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">₹300/hr - ₹900/hr</div>
            </div>
          </CardContent>
        </Card>

        <div>
          <div className="mb-4 flex items-center justify-between text-sm text-slate-600">
            <span>{filteredTutors.length} tutors found</span>
            <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none">
              <option>Top rated</option>
              <option>Lowest fee</option>
              <option>Most reviews</option>
            </select>
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            {filteredTutors.map((tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} onViewProfile={onViewProfile} onBook={onBook} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PostRequirementPage({ onSubmitRequirement }) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <SectionTitle eyebrow="Post a learning need" title="Tell tutors exactly what you need" subtitle="This form-style page helps learners submit a requirement and get matched with relevant experts." />

      <Card className="mt-10 rounded-[32px] border-0 shadow-sm ring-1 ring-slate-200">
        <CardContent className="grid gap-5 p-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Subject / skill</label>
            <Input className="h-12 rounded-2xl" placeholder="e.g. Class 10 Math, Guitar, Python" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Location</label>
            <Input className="h-12 rounded-2xl" placeholder="City / Area / Online" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Budget</label>
            <Input className="h-12 rounded-2xl" placeholder="e.g. ₹400-700 per hour" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Class mode</label>
            <select className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none">
              <option>Online</option>
              <option>At my place</option>
              <option>At tutor's place</option>
              <option>Flexible</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">Describe your requirement</label>
            <textarea className="min-h-[130px] w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Mention goals, level, preferred timings, board/curriculum, or anything tutors should know." />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
            <Input className="h-12 rounded-2xl" placeholder="Your full name" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Phone number</label>
            <Input className="h-12 rounded-2xl" placeholder="Enter mobile number" />
          </div>
          <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-slate-50 p-4">
            <p className="max-w-xl text-sm text-slate-600">Once posted, relevant tutors can respond with availability, pricing, and class details.</p>
            <Button className="rounded-2xl bg-slate-900 px-6 hover:bg-slate-800" onClick={onSubmitRequirement}>Post Requirement</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TutorDashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <SectionTitle eyebrow="Tutor dashboard" title="Provider-side lead and class management" subtitle="This mock dashboard shows how tutors could review leads, profile stats, and upcoming classes." />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1.9fr]">
        <div className="space-y-6">
          <Card className="rounded-3xl border-0 shadow-sm ring-1 ring-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 rounded-2xl">
                  <AvatarFallback className="rounded-2xl bg-slate-100 text-slate-800">AP</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Arjun Patel</h3>
                  <p className="text-sm text-slate-600">Python & Web Development Tutor</p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl bg-slate-50 p-4"><div className="font-semibold text-slate-900">26</div><div className="text-slate-500">New leads</div></div>
                <div className="rounded-2xl bg-slate-50 p-4"><div className="font-semibold text-slate-900">4.9</div><div className="text-slate-500">Average rating</div></div>
                <div className="rounded-2xl bg-slate-50 p-4"><div className="font-semibold text-slate-900">72%</div><div className="text-slate-500">Response rate</div></div>
                <div className="rounded-2xl bg-slate-50 p-4"><div className="font-semibold text-slate-900">14</div><div className="text-slate-500">Active students</div></div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-sm ring-1 ring-slate-200">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-slate-900">Upcoming classes</h4>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl bg-slate-50 p-4">7:00 PM • Python basics with Riya</div>
                <div className="rounded-2xl bg-slate-50 p-4">8:30 PM • HTML/CSS demo with Karthik</div>
                <div className="rounded-2xl bg-slate-50 p-4">Tomorrow • Portfolio review batch class</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="rounded-3xl border-0 shadow-sm ring-1 ring-slate-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-lg font-semibold text-slate-900">Latest learner leads</h4>
              <Button variant="outline" className="rounded-2xl">Export leads</Button>
            </div>
            <div className="mt-6 space-y-4">
              {requirements.map((request) => (
                <div key={request.id} className="flex flex-col justify-between gap-4 rounded-3xl bg-slate-50 p-5 md:flex-row md:items-center">
                  <div>
                    <p className="font-medium text-slate-900">{request.need}</p>
                    <p className="mt-1 text-sm text-slate-600">Learner: {request.learner} • Budget: {request.budget} • Mode: {request.mode}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-slate-500">{request.posted}</span>
                    <Button className="rounded-2xl bg-slate-900 hover:bg-slate-800">Respond</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function AdminPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <SectionTitle eyebrow="Admin overview" title="Marketplace operations dashboard" subtitle="A lightweight admin view for approvals, revenue snapshots, and recent bookings." />

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {[
          ["New tutors pending", "42", ShieldCheck],
          ["Bookings this week", "318", CalendarDays],
          ["Gross revenue", "₹8.4L", Wallet],
          ["Support tickets", "19", Bell],
        ].map(([label, value, Icon]) => (
          <Card key={label} className="rounded-3xl border-0 shadow-sm ring-1 ring-slate-200">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                <Icon className="h-5 w-5 text-slate-700" />
              </div>
              <div className="text-3xl font-bold text-slate-900">{value}</div>
              <div className="mt-2 text-sm text-slate-500">{label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="rounded-3xl border-0 shadow-sm ring-1 ring-slate-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900">Recent bookings</h3>
            <div className="mt-4 space-y-3">
              {bookingsSeed.map((item) => (
                <div key={item.id} className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium text-slate-900">{item.type} • {item.tutor}</p>
                    <Badge className="rounded-full bg-slate-900 text-white hover:bg-slate-900">{item.status}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">Learner: {item.learner} • {item.slot}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-0 shadow-sm ring-1 ring-slate-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900">Tutor approvals</h3>
            <div className="mt-4 space-y-3">
              {["Priyanka S • Chemistry Tutor", "Rohit J • Guitar Trainer", "Lavanya K • Yoga Instructor"].map((name) => (
                <div key={name} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                  <span className="text-sm font-medium text-slate-900">{name}</span>
                  <div className="flex gap-2">
                    <Button variant="outline" className="rounded-xl">Review</Button>
                    <Button className="rounded-xl bg-slate-900 hover:bg-slate-800">Approve</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function AuthPage({ role, onLogin }) {
  return (
    <div className="mx-auto max-w-md px-6 py-14">
      <Card className="rounded-[32px] border-0 shadow-sm ring-1 ring-slate-200">
        <CardContent className="p-8">
          <Badge className="rounded-full bg-slate-100 text-slate-700 hover:bg-slate-100">Mock authentication</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">Sign in as {role}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">This simulates a full-stack role-based login flow for learners, tutors, and admins.</p>
          <div className="mt-6 space-y-4">
            <Input className="h-12 rounded-2xl" placeholder="Email address" />
            <Input className="h-12 rounded-2xl" placeholder="Password" type="password" />
            <Button className="h-12 w-full rounded-2xl bg-slate-900 hover:bg-slate-800" onClick={onLogin}>Continue</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function UrbanProInspiredMarketplace() {
  const [page, setPage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [bookingTutor, setBookingTutor] = useState(null);
  const [toast, setToast] = useState("");
  const [role, setRole] = useState("learner");
  const [loggedIn, setLoggedIn] = useState(false);

  const navItems = [
    { key: "home", label: "Home" },
    { key: "browse", label: "Browse Tutors" },
    { key: "post", label: "Post Requirement" },
    { key: "dashboard", label: "Tutor Dashboard" },
    { key: "admin", label: "Admin" },
  ];

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button className="flex items-center gap-3" onClick={() => setPage("home")}>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">LH</div>
            <div className="text-left">
              <div className="text-lg font-bold text-slate-900">LearnHub</div>
              <div className="text-xs text-slate-500">UrbanPro-style marketplace demo</div>
            </div>
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <button key={item.key} onClick={() => setPage(item.key)} className={`rounded-xl px-4 py-2 text-sm transition ${page === item.key ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <select value={role} onChange={(e) => setRole(e.target.value)} className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none">
              <option value="learner">Learner</option>
              <option value="tutor">Tutor</option>
              <option value="admin">Admin</option>
            </select>
            <Button variant="outline" className="rounded-2xl" onClick={() => setPage("auth")}>{loggedIn ? "Switch account" : "Log in"}</Button>
            <Button className="rounded-2xl bg-slate-900 hover:bg-slate-800" onClick={() => setPage(role === "learner" ? "post" : role === "tutor" ? "dashboard" : "admin")}>{role === "learner" ? "Get Started" : "Open Panel"}</Button>
          </div>

          <button className="rounded-xl border border-slate-200 p-2 md:hidden" onClick={() => setMobileOpen((v) => !v)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button key={item.key} onClick={() => { setPage(item.key); setMobileOpen(false); }} className={`rounded-xl px-4 py-3 text-left text-sm ${page === item.key ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-700"}`}>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main>
        {page === "home" && <HomePage onNavigate={setPage} />}
        {page === "browse" && <BrowsePage onViewProfile={setSelectedTutor} onBook={setBookingTutor} />}
        {page === "post" && <PostRequirementPage onSubmitRequirement={() => showToast("Requirement posted successfully")}/>} 
        {page === "dashboard" && <TutorDashboardPage />}
        {page === "admin" && <AdminPage />}
        {page === "auth" && <AuthPage role={role} onLogin={() => { setLoggedIn(true); showToast(`Signed in as ${role}`); setPage(role === "learner" ? "browse" : role === "tutor" ? "dashboard" : "admin"); }} />}
      </main>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <Card className="overflow-hidden rounded-[32px] border-0 bg-slate-900 text-white shadow-xl">
          <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-2xl">
              <p className="text-sm text-slate-300">Production roadmap</p>
              <h3 className="mt-2 text-3xl font-bold tracking-tight">This frontend now simulates a fuller marketplace product.</h3>
              <p className="mt-3 text-slate-300">For a real deployment, the next step is converting this into a proper Next.js app with API routes, PostgreSQL, authentication, payments, messaging, and cloud storage.</p>
            </div>
            <Button className="rounded-2xl bg-white text-slate-900 hover:bg-slate-100" onClick={() => setPage("auth")}>
              Test role flow <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-lg font-bold text-slate-900">LearnHub</div>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">A polished tutor and trainer marketplace concept inspired by local learning discovery platforms.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Platform</h4>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <div>Browse Tutors</div>
              <div>Post Requirement</div>
              <div>Bookings</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Company</h4>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <div>About</div>
              <div>Support</div>
              <div>Privacy</div>
            </div>
          </div>
        </div>
      </footer>

      <Modal open={!!selectedTutor} onClose={() => setSelectedTutor(null)} title="Tutor Profile">
        {selectedTutor ? (
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16 rounded-2xl">
                <AvatarFallback className="rounded-2xl bg-slate-100 text-slate-800">
                  {selectedTutor.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-2xl font-semibold text-slate-900">{selectedTutor.name}</h4>
                  {selectedTutor.verified ? <Badge className="rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-50">Verified</Badge> : null}
                </div>
                <p className="text-sm text-slate-600">{selectedTutor.subject} • {selectedTutor.location}</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-600">{selectedTutor.about}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4"><div className="font-semibold text-slate-900">{selectedTutor.students}+</div><div className="text-sm text-slate-500">Students taught</div></div>
              <div className="rounded-2xl bg-slate-50 p-4"><div className="font-semibold text-slate-900">{selectedTutor.responseTime}</div><div className="text-sm text-slate-500">Avg. response time</div></div>
              <div className="rounded-2xl bg-slate-50 p-4"><div className="font-semibold text-slate-900">₹{selectedTutor.price}/hr</div><div className="text-sm text-slate-500">Starting fee</div></div>
            </div>
            <div>
              <h5 className="font-semibold text-slate-900">Available slots</h5>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedTutor.availability.map((slot) => <Badge key={slot} className="rounded-full bg-slate-100 text-slate-700 hover:bg-slate-100">{slot}</Badge>)}
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="rounded-2xl bg-slate-900 hover:bg-slate-800" onClick={() => { setBookingTutor(selectedTutor); setSelectedTutor(null); }}>Book demo</Button>
              <Button variant="outline" className="rounded-2xl">Message tutor</Button>
            </div>
          </div>
        ) : null}
      </Modal>

      <Modal open={!!bookingTutor} onClose={() => setBookingTutor(null)} title="Book Demo Class">
        {bookingTutor ? (
          <div className="space-y-5">
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="font-medium text-slate-900">{bookingTutor.name}</p>
              <p className="mt-1 text-sm text-slate-600">{bookingTutor.subject} • ₹{bookingTutor.price}/hr</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Input className="h-12 rounded-2xl" placeholder="Learner name" />
              <Input className="h-12 rounded-2xl" placeholder="Phone number" />
              <Input className="h-12 rounded-2xl" placeholder="Preferred date" />
              <select className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none">
                {bookingTutor.availability.map((slot) => <option key={slot}>{slot}</option>)}
              </select>
            </div>
            <textarea className="min-h-[110px] w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Share goals or class expectations" />
            <div className="flex items-center justify-between rounded-3xl bg-emerald-50 p-4 text-sm text-emerald-800">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Demo request will be shared with the tutor instantly.</div>
              <span>Secure flow</span>
            </div>
            <div className="flex gap-3">
              <Button className="rounded-2xl bg-slate-900 hover:bg-slate-800" onClick={() => { showToast(`Demo requested with ${bookingTutor.name}`); setBookingTutor(null); }}>Confirm booking</Button>
              <Button variant="outline" className="rounded-2xl" onClick={() => setBookingTutor(null)}>Cancel</Button>
            </div>
          </div>
        ) : null}
      </Modal>

      <AnimatePresence>
        {toast ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed bottom-5 right-5 z-50 rounded-2xl bg-slate-900 px-4 py-3 text-sm text-white shadow-xl">
            {toast}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
