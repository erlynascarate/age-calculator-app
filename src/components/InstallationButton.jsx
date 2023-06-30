import { Button, Zoom } from '@mui/material'
import { useEffect, useState } from 'react'

const InstallationButton = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null)

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (event) => {
            event.preventDefault()
            setDeferredPrompt(event)
        })
    }, [])

    const install = async () => {
        deferredPrompt.prompt()

        const { outcome } = await deferredPrompt.userChoice

        if (outcome === 'accepted') return setDeferredPrompt(null)
    }

    return (
        <>
            {deferredPrompt && (
                <Zoom in={true}>
                    <Button
                        onClick={install}
                        sx={{
                            position: 'absolute',
                            insetBlockStart: '-18px',
                            insetInlineStart: 'calc(50% - 59px)',
                            borderRadius: 4,
                            '&:hover': {
                                bgcolor: 'primary.hover',
                            },
                        }}
                        variant='contained'
                    >
                        Install App
                    </Button>
                </Zoom>
            )}
        </>
    )
}

export default InstallationButton
