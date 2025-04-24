'use client';

import { logoutAction } from '@/actions/authActions';
import { pathConstants } from '@/constants/pathConstants';
import { useAdminLoginCookie } from '@/utils/zustandUtils';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';

export default function Page() {
  const { updateToken, updateUser } = useAdminLoginCookie();
  const router = useRouter();
  const [state, formAction, pending] = useActionState(logoutAction, {});

  useEffect(() => {
    if (state?.success) {
      updateToken(undefined);
      updateUser(undefined);
      router.push(pathConstants.login);
    }
  }, [state, router, updateToken, updateUser]);

  return (
    <div className="flex flex-col p-4">
      <h2 className="text-2xl">Dashboard</h2>

      <form action={formAction}>
        <button type="submit" className="border rounded w-fit p-1">
          Logout
          {pending && 'loading'}
        </button>
      </form>
    </div>
  );
}
