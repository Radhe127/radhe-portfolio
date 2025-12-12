import { useEffect, useMemo, useState } from "react";
import Marquee from "react-fast-marquee";
import { useLoading } from "../context/LoadingProvider";
import "./Loading.css";

function useProgress(setPercent) {
  return useMemo(() => {
    let percent = 0;
    let interval = null;

    function start() {
      if (interval) return;
      interval = setInterval(() => {
        if (percent <= 50) {
          percent += Math.round(Math.random() * 6);
        } else if (percent < 92) {
          percent += Math.round(Math.random() * 2);
        }
        percent = Math.min(percent, 92);
        setPercent(percent);
      }, 80);
    }

    function finish() {
      return new Promise((resolve) => {
        if (interval) clearInterval(interval);
        interval = setInterval(() => {
          percent += 2;
          setPercent(Math.min(percent, 100));
          if (percent >= 100) {
            clearInterval(interval);
            interval = null;
            resolve(100);
          }
        }, 18);
      });
    }

    function stop() {
      if (interval) clearInterval(interval);
      interval = null;
    }

    return { start, finish, stop };
  }, [setPercent]);
}

export default function Loading({ percent }) {
  const { setIsLoading, setPercent } = useLoading();
  const [exiting, setExiting] = useState(false);

  const progress = useProgress(setPercent);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    progress.start();

    const doneTimer = setTimeout(async () => {
      await progress.finish();
      // Auto-exit after reaching 100% (no "Press Enter" needed)
      setTimeout(() => {
        setExiting(true);
        import("./utils/initialFX").then((module) => {
          if (module?.initialFX) module.initialFX();
        });
        setTimeout(() => setIsLoading(false), 700);
      }, 400);
    }, 800);

    return () => {
      clearTimeout(doneTimer);
      progress.stop();
    };
  }, [progress, setIsLoading]);

  return (
    <div className={`loading-screen ${exiting ? "loading-exit" : ""}`}>
      {/* 3D-style floating card */}
      <div className="loading-card">
        <div className="loading-card-glow" />

        <div className="loading-card-content">
          <div className="loading-marquee">
            <Marquee gradient={false} speed={45}>
              <span>Creative Developer</span>
              <span>Portfolio</span>
              <span>Creative Developer</span>
              <span>Portfolio</span>
            </Marquee>
          </div>

          <div className="loading-progress-wrap">
            <div className="loading-progress-bar">
              <div
                className="loading-progress-fill"
                style={{ width: `${Math.min(percent, 100)}%` }}
              />
            </div>
            <div className="loading-percent">{Math.min(percent, 100)}%</div>
          </div>

          <p className="loading-status">
            {percent < 100 ? "Preparing experience…" : "Launching…"}
          </p>
        </div>

        {/* Decorative floating shapes */}
        <div className="loading-shape shape-1" />
        <div className="loading-shape shape-2" />
        <div className="loading-shape shape-3" />
      </div>
    </div>
  );
}
