interface ContainProps {
    children: React.ReactNode
}



const Contain: React.FC<ContainProps> = ({children}) => {
  return  <div className=' max-w-[1920px] mx-auto xl:px-20 md:px-2 px-4'>
  {children}
</div>;
};

export default Contain;
