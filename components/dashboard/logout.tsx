"use client"

import { useRouter } from "next/navigation";
import { ILinkProps } from "./nav";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const LogoutButton: React.FC<Omit<ILinkProps, "href">> = ({ text, Icon }) => {
  const router = useRouter()

  const logoutHandler = (): void => {
    router.push("/login")
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="flex items-center gap-4 py-4 pl-6 text-base text-primary-dark32 *:hover:text-primary-orange61 duration-300 cursor-pointer">
          <Icon size={18} />
          <span>{text}</span>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-primary-dark32">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This will logout your account and you will have to login again to
            access your dashboard.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="px-4 py-4">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={logoutHandler}
            className="px-4 py-4 bg-primary-orange61/85 hover:bg-primary-orange61 text-sm text-white border border-primary-orange61/85 hover:border-primary-orange61"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutButton;
