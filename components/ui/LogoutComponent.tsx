'use client';

import { logoutAction } from '@/actions/authActions';
import { pathConstants } from '@/constants/pathConstants';
import { useAdminLoginCookie } from '@/utils/zustandUtils';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import ButtonComponent from '../button/ButtonComponent';

export default function LogoutComponent() {
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
    <form action={formAction}>
      <ButtonComponent
        name="Logout"
        width="fit"
        type="submit"
        pending={pending}
        theme="outlined"
      />
    </form>
  );
}
