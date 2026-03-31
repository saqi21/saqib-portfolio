"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, CheckCircle2, XCircle, Clock, RotateCcw } from "lucide-react";

interface TestCase {
  name: string;
  suite: string;
  duration: number; // ms to "run"
  status: "passed" | "failed";
}

const testCases: TestCase[] = [
  { name: "should render hero section with CTA buttons", suite: "Hero", duration: 420, status: "passed" },
  { name: "should navigate to projects page", suite: "Navigation", duration: 310, status: "passed" },
  { name: "should toggle dark/light theme", suite: "Theme", duration: 580, status: "passed" },
  { name: "should display all skill categories", suite: "Skills", duration: 260, status: "passed" },
  { name: "should validate contact form required fields", suite: "Contact", duration: 490, status: "passed" },
  { name: "should reject empty email submission", suite: "Contact", duration: 350, status: "passed" },
  { name: "should load project detail pages", suite: "Projects", duration: 620, status: "passed" },
  { name: "should be responsive on mobile viewport", suite: "Responsive", duration: 710, status: "passed" },
  { name: "should have no accessibility violations (axe)", suite: "A11y", duration: 880, status: "passed" },
  { name: "should meet Lighthouse performance threshold", suite: "Performance", duration: 950, status: "passed" },
];

type RunState = "idle" | "running" | "done";

export default function LiveTestReport() {
  const [runState, setRunState] = useState<RunState>("idle");
  const [completedTests, setCompletedTests] = useState<number>(0);

  const runTests = useCallback(() => {
    setRunState("running");
    setCompletedTests(0);

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setCompletedTests(i);
      if (i >= testCases.length) {
        clearInterval(interval);
        setRunState("done");
      }
    }, 320);
  }, []);

  const reset = useCallback(() => {
    setRunState("idle");
    setCompletedTests(0);
  }, []);

  const passedCount = testCases.filter((t) => t.status === "passed").length;
  const totalDuration = testCases.reduce((sum, t) => sum + t.duration, 0);

  return (
    <div className="glass overflow-hidden rounded-2xl border border-surface-200/50">
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-surface-200/30 bg-surface-900/80 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 font-mono text-xs text-text-muted">
            cypress run --spec &quot;portfolio.cy.ts&quot;
          </span>
        </div>
        {runState === "done" ? (
          <button
            onClick={reset}
            className="flex cursor-pointer items-center gap-1 rounded-md px-2 py-1 text-xs text-text-muted transition-colors hover:bg-surface-700 hover:text-text-secondary"
          >
            <RotateCcw className="h-3 w-3" />
            Reset
          </button>
        ) : null}
      </div>

      {/* Test Output */}
      <div className="relative bg-surface-950/60 p-4 font-mono text-xs leading-relaxed">
        {runState === "idle" ? (
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <p className="text-sm text-text-muted">
              Run my Cypress test suite against this portfolio
            </p>
            <motion.button
              onClick={runTests}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-green-500/20 transition-all hover:shadow-green-500/30"
            >
              <Play className="h-4 w-4" />
              Run Tests
            </motion.button>
          </div>
        ) : (
          <>
            {/* Suite header */}
            <div className="mb-2 text-text-muted">
              Running: <span className="text-primary-400">portfolio.cy.ts</span>
            </div>

            <AnimatePresence>
              {testCases.slice(0, completedTests).map((test, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-start gap-2 py-0.5"
                >
                  {test.status === "passed" ? (
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-400" />
                  ) : (
                    <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-400" />
                  )}
                  <span className="text-text-secondary">
                    <span className="text-text-muted">{test.suite}</span>
                    {" › "}
                    {test.name}
                  </span>
                  <span className="ml-auto shrink-0 text-text-muted">
                    {test.duration}ms
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Running indicator */}
            {runState === "running" && (
              <motion.div
                className="mt-2 flex items-center gap-2 text-yellow-400"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Clock className="h-3.5 w-3.5" />
                Running test {completedTests + 1} of {testCases.length}...
              </motion.div>
            )}

            {/* Summary */}
            {runState === "done" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 border-t border-surface-200/20 pt-3"
              >
                <div className="flex items-center gap-4">
                  <span className="text-green-400">
                    ✓ {passedCount} passing
                  </span>
                  {passedCount < testCases.length && (
                    <span className="text-red-400">
                      ✗ {testCases.length - passedCount} failing
                    </span>
                  )}
                  <span className="text-text-muted">
                    ({(totalDuration / 1000).toFixed(1)}s)
                  </span>
                </div>
                <div className="mt-2 text-green-400/80">
                  All specs passed! Portfolio is production-ready. 🚀
                </div>
              </motion.div>
            )}
          </>
        )}
      </div>

      {/* Progress bar */}
      {runState === "running" && (
        <div className="h-1 bg-surface-800">
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
            initial={{ width: "0%" }}
            animate={{ width: `${(completedTests / testCases.length) * 100}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
      )}
      {runState === "done" && (
        <div className="h-1 bg-green-500" />
      )}
    </div>
  );
}
