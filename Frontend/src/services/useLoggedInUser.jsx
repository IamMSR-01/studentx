import { useEffect, useState } from "react";
import axios from "axios";
import API from "../utils/axios";

const useLoggedInUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) return;

      try {
        const res = await API.get("/auth/:id", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data.user);
      } catch (error) {
        console.log("failed to fetch user", error);
      }
    };
    fetchUser();
  }, []);

  return user;
};

export default useLoggedInUser;
