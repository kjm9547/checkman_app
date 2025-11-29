import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import "./global.css";
import LandView from "./land/LandView";

export default function Index() {
  const { autoLogin } = useAuth();
  useEffect(() => {
    autoLogin();
  }, []);
  return <LandView />;
}
