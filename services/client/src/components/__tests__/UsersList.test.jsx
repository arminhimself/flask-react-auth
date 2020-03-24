import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import UsersList from "../UsersList";

afterEach(cleanup);

const users = [
  {
    email: "armin.babaei@gmail.com",
    id: 1,
    username: "armin"
  },
  {
    email: "armin.babaei@icloud.com",
    id: 2,
    username: "arminhimself"
  }
];

it("renders a username", () => {
  const { getByText } = render(
    <UsersList
      users={users}
      removeUser={() => true}
      isAuthenticated={() => true}
    />
  );
  expect(getByText("armin")).toHaveClass("username");
  expect(getByText("arminhimself")).toHaveClass("username");
});

it("renders", () => {
  const { asFragment } = render(
    <UsersList
      users={users}
      removeUser={() => true}
      isAuthenticated={() => false}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

it("renders when authenticated", () => {
  const { asFragment } = render(
    <UsersList
      users={users}
      removeUser={() => true}
      isAuthenticated={() => true}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
