"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiClock,
  FiUser,
  FiLogOut,
  FiInbox,
  FiCheck,
  FiTrash2,
  FiEye,
  FiArrowLeft,
  FiRefreshCw,
} from "react-icons/fi";
import { getFirebaseAuth, getDb } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  read: boolean;
  createdAt: Timestamp | null;
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(
    null
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getFirebaseAuth(), (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(getDb(), "contactMessages"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs: ContactMessage[] = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      })) as ContactMessage[];
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <LoginScreen />;
  }

  return (
    <Dashboard
      user={user}
      messages={messages}
      selectedMessage={selectedMessage}
      onSelectMessage={setSelectedMessage}
    />
  );
}

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
    } catch {
      setError("Invalid credentials. Access denied.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-6">
      <div className="grain-overlay" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 text-sm mb-8 transition-colors"
          >
            <FiArrowLeft /> Back to Portfolio
          </a>
          <h1 className="text-3xl font-bold text-white">
            Admin <span className="gradient-text">Access</span>
          </h1>
          <p className="mt-2 text-white/40 text-sm">
            Authorized personnel only
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="glass rounded-2xl p-8 space-y-6"
        >
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center"
            >
              {error}
            </motion.div>
          )}

          <div>
            <label className="block text-sm text-white/40 mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all outline-none"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-white/40 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-accent hover:bg-accent-light text-white font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(109,40,217,0.3)] flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

function Dashboard({
  user,
  messages,
  selectedMessage,
  onSelectMessage,
}: {
  user: User;
  messages: ContactMessage[];
  selectedMessage: ContactMessage | null;
  onSelectMessage: (m: ContactMessage | null) => void;
}) {
  const unreadCount = messages.filter((m) => !m.read).length;

  const handleMarkRead = useCallback(async (msg: ContactMessage) => {
    await updateDoc(doc(getDb(), "contactMessages", msg.id), { read: true });
  }, []);

  const handleDelete = useCallback(
    async (msg: ContactMessage) => {
      if (window.confirm(`Delete message from ${msg.name}?`)) {
        await deleteDoc(doc(getDb(), "contactMessages", msg.id));
        onSelectMessage(null);
      }
    },
    [onSelectMessage]
  );

  const formatDate = (timestamp: Timestamp | null) => {
    if (!timestamp) return "Just now";
    const date = timestamp.toDate();
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-dark">
      <div className="grain-overlay" />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-dark/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-white/40 hover:text-white transition-colors"
            >
              <FiArrowLeft size={20} />
            </a>
            <div>
              <h1 className="text-lg font-bold text-white">
                Admin <span className="gradient-text">Dashboard</span>
              </h1>
              <p className="text-xs text-white/30">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-full">
              <FiInbox className="text-violet-400" />
              <span className="text-sm text-white/60">
                {unreadCount} unread
              </span>
            </div>
            <button
              onClick={() => signOut(getFirebaseAuth())}
              className="flex items-center gap-2 px-4 py-2 text-sm text-white/40 hover:text-white border border-white/10 hover:border-white/20 rounded-full transition-all"
            >
              <FiLogOut /> Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            {
              label: "Total Messages",
              value: messages.length,
              icon: FiMail,
              color: "text-violet-400",
            },
            {
              label: "Unread",
              value: unreadCount,
              icon: FiInbox,
              color: "text-cyan-400",
            },
            {
              label: "Read",
              value: messages.length - unreadCount,
              icon: FiCheck,
              color: "text-emerald-400",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-5"
            >
              <div className="flex items-center gap-3">
                <stat.icon className={`text-xl ${stat.color}`} />
                <div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/30">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Messages */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Message List */}
          <div className="lg:col-span-2 space-y-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-white">Messages</h2>
              <button
                onClick={() => window.location.reload()}
                className="p-2 text-white/30 hover:text-white transition-colors"
                title="Refresh"
              >
                <FiRefreshCw size={16} />
              </button>
            </div>

            {messages.length === 0 ? (
              <div className="glass rounded-xl p-8 text-center">
                <FiInbox className="text-4xl text-white/10 mx-auto mb-3" />
                <p className="text-white/30 text-sm">No messages yet</p>
              </div>
            ) : (
              <div className="space-y-2 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
                {messages.map((msg) => (
                  <motion.button
                    key={msg.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => {
                      onSelectMessage(msg);
                      if (!msg.read) handleMarkRead(msg);
                    }}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      selectedMessage?.id === msg.id
                        ? "glass border border-violet-500/50"
                        : "glass glass-hover"
                    } ${!msg.read ? "border-l-2 border-l-violet-500" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <FiUser
                          className={`flex-shrink-0 ${
                            msg.read ? "text-white/20" : "text-violet-400"
                          }`}
                        />
                        <span
                          className={`text-sm truncate ${
                            msg.read
                              ? "text-white/50"
                              : "text-white font-semibold"
                          }`}
                        >
                          {msg.name}
                        </span>
                      </div>
                      {!msg.read && (
                        <span className="w-2 h-2 rounded-full bg-violet-500 flex-shrink-0 mt-1.5" />
                      )}
                    </div>
                    <p className="text-xs text-white/30 mt-1 truncate">
                      {msg.message}
                    </p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-white/20">
                      <FiClock size={10} />
                      {formatDate(msg.createdAt)}
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {selectedMessage ? (
                <motion.div
                  key={selectedMessage.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="glass rounded-2xl p-8"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {selectedMessage.name}
                      </h3>
                      <a
                        href={`mailto:${selectedMessage.email}`}
                        className="text-sm text-violet-400 hover:text-violet-300 transition-colors"
                      >
                        {selectedMessage.email}
                      </a>
                      <div className="flex items-center gap-2 mt-2 text-xs text-white/30">
                        <FiClock size={12} />
                        {formatDate(selectedMessage.createdAt)}
                        {selectedMessage.read && (
                          <span className="flex items-center gap-1 text-emerald-400/60">
                            <FiEye size={12} /> Read
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={`mailto:${selectedMessage.email}?subject=Re: Portfolio Contact&body=%0A%0A----%0AOriginal message:%0A${encodeURIComponent(selectedMessage.message)}`}
                        className="p-2 glass rounded-lg text-white/40 hover:text-white transition-colors"
                        title="Reply"
                      >
                        <FiMail size={16} />
                      </a>
                      <button
                        onClick={() => handleDelete(selectedMessage)}
                        className="p-2 glass rounded-lg text-white/40 hover:text-red-400 transition-colors"
                        title="Delete"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-6">
                    <p className="text-white/60 leading-relaxed whitespace-pre-wrap">
                      {selectedMessage.message}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5">
                    <a
                      href={`mailto:${selectedMessage.email}?subject=Re: Portfolio Contact`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white rounded-xl font-medium transition-all hover:shadow-[0_0_30px_rgba(109,40,217,0.3)]"
                    >
                      <FiMail /> Reply to {selectedMessage.name}
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="glass rounded-2xl p-12 text-center"
                >
                  <FiMail className="text-5xl text-white/10 mx-auto mb-4" />
                  <p className="text-white/30">
                    Select a message to view details
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
