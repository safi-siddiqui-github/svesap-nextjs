'use client';

import { createCategoryAction } from '@/actions/categoryActions';
import ButtonComponent from '@/components/button/ButtonComponent';
import TextInputComponent from '@/components/input/TextInputComponent';
import { pathConstants } from '@/constants/pathConstants';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';

export default function Page() {
  const [state, formAction, pending] = useActionState(createCategoryAction, {});
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push(pathConstants.categories.read);
    }
  }, [state, router]);

  return (
    <div className="flex flex-col p-4 gap-4 w-full">
      <h2 className="text-2xl">Categories / Create</h2>

      <form action={formAction} className="flex flex-col gap-4 w-full max-w-sm">
        <TextInputComponent
          id="name"
          label="Name"
          defaultValue={state?.old?.name}
          name="name"
          error={state.errors?.name}
        />

        <TextInputComponent
          id="description"
          label="Description"
          defaultValue={state?.old?.description}
          name="description"
          error={state.errors?.description}
        />

        <ButtonComponent
          name="Submit"
          width="fit"
          type="submit"
          pending={pending}
        />
      </form>
    </div>
  );
}
