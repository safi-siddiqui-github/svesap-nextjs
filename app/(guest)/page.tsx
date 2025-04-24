'use client';

import { loginAction } from '@/actions/authActions';
import ButtonComponent from '@/components/button/ButtonComponent';
import PasswordInputComponent from '@/components/input/PasswordInputComponent';
import TextInputComponent from '@/components/input/TextInputComponent';
import { pathConstants } from '@/constants/pathConstants';
import { useAdminLoginCookie } from '@/utils/zustandUtils';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';

export default function Page() {
  const [state, formAction, pending] = useActionState(loginAction, {});
  const { updateToken, updateUser } = useAdminLoginCookie();
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      updateToken(state?.data?.token);
      updateUser(state?.data?.user);
      router.push(pathConstants.dashboard);
    }
  }, [state, router, updateToken, updateUser]);

  return (
    <div className="h-screen w-full min-h-fit items-center justify-center  p-4 flex flex-col">
      <form action={formAction} className="flex flex-col gap-4 w-full max-w-sm">
        <h2 className="text-2xl">SVESAP Login</h2>

        <TextInputComponent
          id="email"
          label="Email"
          defaultValue={state?.old?.email}
          name="email"
          error={state.errors?.email}
        />

        <PasswordInputComponent
          id="password"
          label="Password"
          defaultValue={state?.old?.password}
          name="password"
          error={state.errors?.password}
        />

        <div className="flex flex-col">
          <p className="font-medium">Hint Email/Password</p>
          <p className="">safisiddiqui.work@gmail.com</p>
          <p className="">aaaaa</p>
        </div>

        <ButtonComponent name="Login" type="submit" pending={pending} />
      </form>
    </div>
  );
}
