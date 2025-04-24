import LoadingComponent from '../ui/LoadingComponent';

type ButtonComponentProps = {
  name: string;
  icon?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  pending?: boolean;
  width?: 'fit';
  theme?: 'outlined';
};

export default function ButtonComponent(props: ButtonComponentProps) {
  const { icon, name, type = 'button', pending, width, theme } = props;

  return (
    <button
      type={type}
      className={`flex items-center justify-center py-1 px-4 gap-1 font-medium rounded ${theme == 'outlined' ? 'border' : 'bg-black text-white'} ${width == 'fit' ? 'w-fit' : 'w-full'}`}
    >
      {icon}
      <span>{name}</span>
      {pending && <LoadingComponent />}
    </button>
  );
}
