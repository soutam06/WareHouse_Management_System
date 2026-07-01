import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Popup from 'reactjs-popup';
import { IoMdClose } from "react-icons/io";
import {useState} from "react";
import Item from '../Item/Item';

export default function Itemcard({item}) {

  const [IsOpen,setIsOpen] = useState(false);

    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);
  return (
    <>
    <Card sx={{ maxWidth: 345 }} onClick = {openPopup}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          sx = {{maxHeight:200, objectFit:'contain'}}
          image={item.image_url}
          alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Quantity : {item.quantity}
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>

    <Popup position={"right center"} modal = {true} closeOnDocumentClick = {false} className="h-auto w-auto relative" open = {IsOpen} onClose={closePopup} >
               
               <IoMdClose className = "absolute top-0 right-0 z-20 cursor-pointer" size={30} onClick={closePopup}/>
               {/* <Gallery_popup title = {props.title} desc = {props.desc} img = {props.img}/> */}
                <Item item = {item}/>
           </Popup>
   
    </>
  );
}
