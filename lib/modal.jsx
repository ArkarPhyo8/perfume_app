export default function Modal(){
    return (
        <div className="fixed w-full z-50 inset-0 backdrop-blur-sm bg-slate-900 bg-opacity-25">
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
          <Register/>
        </div>
      </div>
    )
}