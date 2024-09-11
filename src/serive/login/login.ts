//文档 https://documenter.getpostman.com/view/12387168/TzzDKb12#61791a1f-9410-42ee-8be1-0650b3bf2e97

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
