import SearchNavbar from "@/components/SearchNavbar";

export default function Category({children}){
    return(
        <>
        <SearchNavbar/>
        {children}
        </>
    )
}