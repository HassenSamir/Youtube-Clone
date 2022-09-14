import React from "react";
import { Stack, Box, Grid } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
    if (!videos?.length) return <Loader />;

    return (
        <Grid container spacing={2} direction={direction && "column"}>
            {videos.filter(x => x.id.videoId || x.id.channelId).map((item, idx) => (
                <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={idx} spacing={2} >
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Grid>
            ))}
        </Grid>
    );
}

export default Videos;