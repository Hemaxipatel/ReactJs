import React, { useEffect, useState } from 'react'
import Navibar from '../Navigationbar/Navibar'
import FooterCom from '../FooterPage/FooterCom'
import SellerProduct from '../BestSeller/SellerProduct'
import AllWatchData from '../../Utils/AllWatchData.json'
import { Container } from 'react-bootstrap'

export default function KidsWatchGirl() {
    // let [girlWatchData, setGirlWatchData] = useState(AllWatchData)

    let [girlWatchData, setGirlWatchData] = useState([])
    let [searchText, setSearchText] = useState("")

    useEffect(() => {
        let filterGirlData = AllWatchData.filter((e) => {
            return e.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setGirlWatchData(filterGirlData.filter((e) => e.gender === "GIRL"))
    })
    return (
        <>
            <Navibar search={true} setSearchText={setSearchText} />
            <Container>
                <div className='d-flex flex-wrap gap-5'>
                    {
                        girlWatchData.map((e) => {
                            return <SellerProduct data={e} />
                        })
                    }
                </div>
            </Container>
            <FooterCom />
        </>
    )
}
