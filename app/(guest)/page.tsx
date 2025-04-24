'use client';

import { loginAction } from '@/actions/authActions';
import { pathConstants } from '@/constants/pathConstants';
import { useAdminLoginCookie } from '@/utils/zustandUtils';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';

export default function Page() {
  const [showP, setShowP] = useState(false);
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

        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium w-fit">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            className="border rounded px-2 py-1"
            defaultValue={state?.old?.email}
          />
          <p className="text-red-500">{state.errors?.email}</p>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between">
            <label htmlFor="password" className="font-medium w-fit">
              Password
            </label>
            <button type="button" onClick={() => setShowP(!showP)}>
              Show/Hide
            </button>
          </div>

          <input
            id="password"
            name="password"
            type={showP ? 'text' : 'password'}
            className="border rounded px-2 py-1"
            defaultValue={state?.old?.password}
          />

          <p className="text-red-500">{state.errors?.password}</p>
        </div>

        <button
          type="submit"
          className="bg-black text-white p-1.5 font-medium rounded"
        >
          Submit
          {pending && ' Loading'}
        </button>
      </form>
    </div>
  );
}
