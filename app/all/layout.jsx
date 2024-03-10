import SearchNavbar from "@/components/SearchNavbar";

export default function AllLayout({children}){
    return(
        <>
        <SearchNavbar/>
        {children}</>
    )
}