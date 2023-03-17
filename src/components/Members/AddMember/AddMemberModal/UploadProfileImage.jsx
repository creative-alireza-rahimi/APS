import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {
    Button,
    Stack,
    Avatar,
    FormControl,
    FormHelperText
} from '@mui/material';

export const UploadProfileImage = ({ handleUploadClick, handleProfileImage, ImagePreview }) => {

    return (
        <FormControl variant="standard" sx={{ display: "flex", alignItems: "center" }}>
            <Button
                variant="outlined"
                component="label"
                onClick={handleUploadClick}
                sx={{
                    color: "black",
                    border: "black",
                    margin: "0 auto",
                    marginTop: "1.6rem",

                    '&:hover': {
                        borderColor: 'black',
                        background: "rgb(0 0 0 / 10%)"
                    }
                }}
                aria-describedby="profilePictureInfo"
            >
                <Stack direction="row" alignItems="center" spacing={2}>
                    <PhotoCamera sx={{ marginRight: "0.4rem", color: "gray" }} />
                    {ImagePreview ? "Change Photo" : "Upload Photo"}
                    {ImagePreview && <Avatar alt="Remy Sharp" src={ImagePreview} />}
                </Stack>
                <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={handleProfileImage}
                />
            </Button>
            {!ImagePreview && <FormHelperText id="profilePictureInfo">
                Upload your image or leave for default
            </FormHelperText>}
        </FormControl>
    );
}