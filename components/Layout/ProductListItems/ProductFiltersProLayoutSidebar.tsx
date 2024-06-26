import { FormAutoSubmit } from '@graphcommerce/ecommerce-ui'
import { useProductFiltersPro } from '@graphcommerce/magento-product'

import { extendableComponent } from '@graphcommerce/next-ui'
import { Box, Container } from '@mui/material'
import React from 'react'
import { StickyBelowHeader } from './StickyBelowHeader'

export type ProductFiltersProLayoutSidebarProps = {
  items: React.ReactNode
  clearAll?: React.ReactNode
  horizontalFilters: React.ReactNode
  sidebarFilters?: React.ReactNode
  count?: React.ReactNode
  pagination: React.ReactNode
  header?: React.ReactNode
} & Partial<OwnerProps>

type OwnerProps = {
  headerPosition: 'before'
}
const name = 'ProductFiltersProLayoutSidebar' as const
const parts = ['root', 'content'] as const
const { withState } = extendableComponent<OwnerProps, typeof name, typeof parts>(name, parts)

export function ProductFiltersProLayoutSidebar(props: ProductFiltersProLayoutSidebarProps) {
  const {
    items,
    clearAll,
    horizontalFilters,
    count,
    pagination,
    sidebarFilters,
    header,
    headerPosition = 'before',
  } = props

  const { form, submit } = useProductFiltersPro()
  const classes = withState({ headerPosition })

  return (
    <>
      {headerPosition === 'before' ? header : null}

      <FormAutoSubmit control={form.control} submit={submit} />

      <StickyBelowHeader
>
        <Box

        >
          {horizontalFilters}
        </Box>
      </StickyBelowHeader>

      <Container maxWidth={false}>
        <Box gridArea='beforeContent'>{count}</Box>
        <Box gridArea='items'>{items}</Box>

        {pagination && <Box gridArea='afterContent'>{pagination}</Box>}
      </Container>
    </>
  )
}
