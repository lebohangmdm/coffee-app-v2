import ViewCard from "./ViewCard";

const ViewList = ({ coffees }) => {
  return (
    <div className="flex flex-col gap-8 md:gap-8">
      {coffees.map((coffee) => {
        return <ViewCard key={coffee.id} coffee={coffee} />;
      })}
    </div>
  );
};

export default ViewList;

// const UpdateFormPassword = ({
//   checked,
//   label,
//   title,
//   type,
//   name,
//   children,
//   buttonName,
// }) => {
//   return (
//     <>
//       {checked && (
//         <div className="items-start">
//           <h3 className="text-xl font-serif text-brownish-1 font-semibold md:text-2xl ">
//             {title}
//           </h3>
//           <hr className="w-full h-[2px]  mt-2 mb-4 bg-amber-800" />
//           <Form>
//             <div className="space-y-4">
//               <div className="space-y-1">
//                 <label className="capitalize text-brownish-2 font-medium text-sm">
//                   {label}
//                 </label>
//                 <input
//                   type={type}
//                   name={name}
//                   className="py-1  px-4 text-sm bg-transparent w-full rounded-sm border border-brownish-1 focus:border-brownish-2"
//                   required
//                 />
//               </div>
//               <div className="space-y-1">
//                 <label className="capitalize text-brownish-2 font-medium text-sm">
//                   {label}
//                 </label>
//                 <input
//                   type={type}
//                   name={name}
//                   className="py-1 px-4 text-sm bg-transparent w-full rounded-sm border border-brownish-1 focus:border-brownish-2"
//                   required
//                 />
//               </div>
//               {children}
//               <div>
//                 <button className="text-base block  font-medium rounded-sm uppercase py-2 px-4 bg-brownish-1 text-white hover:brightness-200 transition-all duration-160">
//                   {buttonName}
//                 </button>
//               </div>
//             </div>
//           </Form>
//         </div>
//       )}
//     </>
//   );
// };
