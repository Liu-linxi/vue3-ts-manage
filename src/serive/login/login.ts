import lxRequest from "..";
import type { IAcount } from "@/types";

export function accountLogin(account: IAcount) {
  return lxRequest.post({
    url: "/login",
    data: account,
  });
}

export function getUserById(id: number) {
  return lxRequest.get({
    url: "/users/" + id,
  });
}

export function getRoleMenus(id: number) {
  return lxRequest.get({
    url: `/role/${id}/menu`,
  });
}
