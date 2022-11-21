import { charles, stan } from "./underlings";

export enum TheodoerNames {
  Stan = "STAN",
  Charles = "CHARLES",
  Julien = "JULIEN",
}

export const boss = {
  name: TheodoerNames.Julien,
  underlings: [charles, stan],
};
