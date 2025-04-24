import {
  allCategoriesAction,
  deleteCategoryAction,
} from '@/actions/categoryActions';
import ButtonComponent from '@/components/button/ButtonComponent';
import ActionDataComponent from '@/components/ui/ActionDataComponent';
import { pathConstants } from '@/constants/pathConstants';
import Link from 'next/link';

export default async function Page() {
  const { data } = await allCategoriesAction();

  return (
    <div className="flex flex-col p-4 gap-4 w-full">
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-2xl">Categories</h2>

        <div className="flex gap-2">
          <Link href={pathConstants.categories.create}>
            <ButtonComponent name="Create" width="fit" theme="outlined" />
          </Link>
          <Link href={pathConstants.categories.recover}>
            <ButtonComponent name="Recover" width="fit" theme="outlined" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-5 max-w-lg font-medium">
          <p className="">Name</p>
          <p className="col-span-2">Description</p>
          <p className="">Modified</p>
          <p className="">Action</p>
        </div>

        {data?.categories?.map(({ id, name, description, modified_at }) => (
          <div key={id} className="grid grid-cols-5 max-w-lg">
            <p className="">{name}</p>
            <p className=" col-span-2">{description}</p>
            <p className="">{modified_at}</p>
            <ActionDataComponent
              id={id}
              name="Delete"
              action={deleteCategoryAction}
              redirect={pathConstants.categories.read}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
