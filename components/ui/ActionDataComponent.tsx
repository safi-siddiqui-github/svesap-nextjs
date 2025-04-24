'use client';

import { ResponseResultType } from '@/types/responseTypes';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import ButtonComponent from '../button/ButtonComponent';

type ActionDataComponentType = {
  action: (
    _: ResponseResultType,
    formData: FormData
  ) => Promise<ResponseResultType>;
  name: string;
  redirect: string;
  id?: string;
};

export default function ActionDataComponent(props: ActionDataComponentType) {
  const router = useRouter();
  const { action, name, redirect, id } = props;
  const [state, formAction, pending] = useActionState(action, {});

  useEffect(() => {
    if (state?.success) {
      router.push(redirect);
    }
  }, [state, router, redirect]);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" defaultValue={id} />
      <ButtonComponent
        name={name}
        width="fit"
        type="submit"
        pending={pending}
        theme="outlined"
      />
    </form>
  );
}
