import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "../services/api";
import { formatDate } from "../utils/format";

type UserProperties = {
  name: string;
  email: string;
  id: string;
  createdAt: string;
};

type AxiosResponse = {
  users: Array<UserProperties>;
};

type GetUsersResponse = {
  users: UserProperties[];
  total: number;
};

export const loadUsers = async (page: number): Promise<GetUsersResponse> => {
  let { data, headers } = await api.get<AxiosResponse>("/users?", {
    params: {
      page
    }
  });

  const totalUsers = Number(headers["x-total-count"]);

  return {
    users: data.users.map((user) => ({
      ...user,
      createdAt: formatDate(user.createdAt)
    })),
    total: totalUsers
  };
};

export function useUsers(page: number) {
  return useQuery<GetUsersResponse, AxiosError>(
    ["users", page],
    () => loadUsers(page),
    {
      keepPreviousData: true
    }
  );
}
