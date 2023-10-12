import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Modal, Typography, Image, Flex, Button, Space, Layout } from 'antd'
import React from 'react'
const { Text } = Typography

import WishIcon from '../icons/WishIcon'

import './styles.css'

const { Footer } = Layout

const ModalView = ({ selectedBubbleIndex, setSelectedBubbleIndex, activeTab }) => (
  <Modal
    visible={selectedBubbleIndex !== null}
    onCancel={() => setSelectedBubbleIndex(null)}
    footer={null}
    centered
    className='newStyle'
  >
    <div className='container'>
      <Image
        src={
          selectedBubbleIndex?.logo ||
          (activeTab === 'companies' ? '/icons/company_logo.svg' : '/icons/pic1.svg')
        }
        alt='Company Logo'
        width={100}
        height={100}
        preview={false}
        fallback='/icons/company_logo.svg'
        borderRadius='50px'
      />
      <Text className='mainTitle'>
        {activeTab === 'companies' ? selectedBubbleIndex?.name : selectedBubbleIndex?.firstname}
      </Text>
      <Text className='secondaryTitle marginTop10 textAlignCenter color24292E'>
        {selectedBubbleIndex?.country ?? 'United Arab Emirates, Dubai'}
      </Text>
      <Text className='secondaryTitle marginTop18 textAlignCenter color24292E'>
        {selectedBubbleIndex?.brief?.split(' ')?.slice(0, 10)?.join(' ')}
      </Text>
      <Flex gap={10}>
        <Text>
          <span className='fontWeight600'>235</span> Connections |
        </Text>
        <Text>
          <span className='fontWeight600'>35</span>{' '}
          {activeTab === 'companies' ? 'Pipeline' : 'Meetings'} |{' '}
        </Text>
        <Text>
          <span className='fontWeight600'>{selectedBubbleIndex.totalMeetings ?? 0}</span>{' '}
          {activeTab === 'companies' ? 'Total Meetings' : 'Meetings'}
        </Text>
      </Flex>
      {console.log('selectedBubbleIndex : ', selectedBubbleIndex)}
      <Text className='colorFF681A'>
        {activeTab === 'companies' && (selectedBubbleIndex.website ?? 'Aladdib2b.com')}
      </Text>
      <Flex>
        {activeTab === 'companies' ? (
          <>
            <Flex style={{ width: '45%' }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <Image src='/icons/pic2.svg' alt='pic 2' width={100} height={100} />
              </div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Image
                  src='/icons/pic3.svg'
                  alt='pic 3'
                  width={100}
                  height={100}
                  className='profile3'
                />
              </div>
              <div style={{ position: 'relative', zIndex: 3 }}>
                <Image
                  src='/icons/pic1.svg'
                  alt='pic 1'
                  width={100}
                  height={100}
                  className='profile1'
                />
              </div>
            </Flex>
            <Flex vertical='vertical'>
              <Text className='mainTitle'>Alexandra Maldonado</Text>
              <Text className='secondaryTitle marginTop18 textAlignStart color24292E'>
                Chief Executive Officer
              </Text>
              <Text className='secondaryTitle marginTop10 textAlignStart color24292E'>
                Total 9 attendees
              </Text>
            </Flex>
          </>
        ) : (
          <Flex vertical='vertical' style={{ textAlign: 'center' }}>
            <Text className='secondaryTitle marginTop18 textAlignCenter color24292E'>
              Providing best quality supply chains and e-commerce anywhere & anytime. Trade shows &
              trade programs, SaaS technologies and marketing.
            </Text>
          </Flex>
        )}
      </Flex>
      <Space direction='vertical' style={{ width: '100%', paddingTop: '31px' }}>
        <Button size='large' block className='requestButton'>
          <Text strong style={{ color: '#fff' }}>
            Request Meeting
          </Text>
        </Button>
        <Button size='large' block>
          <Text strong className='color24292ED9'>
            {activeTab === 'companies' ? 'Request for Quotation' : 'View User profile'}
          </Text>
        </Button>
        <Button size='large' block>
          <Text strong className='color24292ED9'>
            View compay Profile
          </Text>
        </Button>
      </Space>
    </div>
    <Footer style={{ width: '100%', marginTop: '20px' }}>
      <Flex justify='space-between' align='center'>
        <Button type='text'>
          <FiChevronLeft />
        </Button>
        {activeTab === 'companies' && (
          <Button size='large'>
            <Flex justify='center' align='center'>
              <WishIcon />
              <Text className='color24292ED9 fontWeight500 wishButton'>Add to my Wish List</Text>
            </Flex>
          </Button>
        )}
        <Button type='text'>
          <FiChevronRight />
        </Button>
      </Flex>
    </Footer>
  </Modal>
)

export default ModalView
