import { RichText } from '@graphcommerce/graphcms-ui'
import { breakpointVal } from '@graphcommerce/next-ui'
import { Box, Button } from '@mui/material'
import { RowHeroBannerCopyFragment } from './Banner.gql'
import { BannerLayout } from './BannerLayout'

export function RowHeroBannerCopy (props: RowHeroBannerCopyFragment) {
  const { heroAsset, copy, pageLinks } = props

  return (
    <BannerLayout
      bannerLink={pageLinks.map(({ url, title }) => (
        <Button key={url} href={url} variant='contained' size='large' color='primary'>
          {title}
        </Button>
      ))}
      imageSrc={heroAsset.url}
      sx={(theme) => ({
        height: `calc(100vh - ${theme.appShell.headerHeightMd})`,
        '& .BannerLayout-copy': {
        //     // minHeight: { xs: 'min(100%,80vh)', md: 'min(100%,80vh)' },
        //     // height: `calc(100vh - ${theme.appShell.headerHeightMd})`,
        //     width: '100%',
  
        //     [theme.breakpoints.up('sm')]: {
        //       // display: 'flex', // Apply Flexbox
        //       // justifyContent: 'flex-end', // Align right
        //     //   padding: theme.spacings.xl,

        justifyItems: 'start',
              alignContent: 'center',
              textAlign: 'left',
              paddingY: '2vh',
              width: '60%',
        //     },
          },
          '& .BannerLayout-image': {
            position: 'absolute',
            left: 0,
            top: 0,
            // marginTop: `calc(${theme.appShell.headerHeightMd} * - 1)`,
            height: '100vh',
            width: '100%',
            objectFit: 'cover',
            objectPosition: '85% 15%',
            [theme.breakpoints.down('md')]: {

              objectPosition: '85% 15%',
            },
           [theme.breakpoints.up('md')]: {
            objectPosition: 'right',
          }},
        })}
        >
      <RichText
        {...copy}
        sxRenderer={{
          paragraph: {
            typography: 'overline',
          },
          'heading-one': (theme) => ({
            paddingBottom: '10vh',
            textTransform: 'uppercase',

            mt: 1,
            mb: theme.spacings.sm,
            ...breakpointVal('fontSize', 42, 88, theme.breakpoints.values),

            '& strong': {
              WebkitTextFillColor: 'transparent',
              WebkitTextStroke: `1.2px #fff`,
              backgroundColor: { background: (theme.palette.primary.main, 0.6) },
              // backgroundOpacity: '0.5',
            },
          }),
        }}
      />
    </BannerLayout>
  )
}
