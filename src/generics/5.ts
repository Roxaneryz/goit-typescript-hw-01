export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type InfoRoleUser= Record<UserRole, string>
const RoleDescription: InfoRoleUser = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
