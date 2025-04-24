import {
  recoverCategoryAction,
  trashedCategoriesAction,
} from '@/actions/categoryActions';
import ActionDataComponent from '@/components/ui/ActionDataComponent';
import { pathConstants } from '@/constants/pathConstants';

export default async function Page() {
  const { data } = await trashedCategoriesAction();

  return (
    <div className="flex flex-col p-4 gap-4 w-full">
      <h2 className="text-2xl">Categories / Recover</h2>

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
              name="Recover"
              action={recoverCategoryAction}
              redirect={pathConstants.categories.recover}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
