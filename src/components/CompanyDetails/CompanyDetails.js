import React from 'react'
import { Modal, Button } from 'antd'
import { useDispatch } from 'react-redux'
// import { requestMeeting, requestQuotation, addToWishList } from '../../redux/actions/actionTypes'

const CompanyDetails = ({ company, visible, onClose }) => {
  const dispatch = useDispatch()

  const handleRequestMeeting = () => {
    // dispatch(requestMeeting(company._id))
  }

  const handleRequestQuotation = () => {
    // dispatch(requestQuotation(company._id))
  }

  const handleAddToWishList = () => {
    // dispatch(addToWishList(company._id))
  }

  return (
    <Modal
      title={company.name}
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key='back' onClick={onClose}>
          Close
        </Button>,
      ]}
    >
      <div>
        <img src={company.logo} alt={company.name} style={{ maxWidth: '100%' }} />
      </div>
      <p>
        <strong>Country:</strong> {company.country}
      </p>
      <p>
        <strong>Contacts:</strong>{' '}
        {company.contacts.map((contact) => `${contact.firstname} ${contact.lastname}`).join(', ')}
      </p>
      <p>
        <strong>Brief:</strong> {company.brief}
      </p>
      <div style={{ marginTop: '20px' }}>
        <Button type='primary' onClick={handleRequestMeeting} style={{ marginRight: '10px' }}>
          Request Meeting
        </Button>
        <Button type='primary' onClick={handleRequestQuotation} style={{ marginRight: '10px' }}>
          Request Quotation
        </Button>
        <Button type='primary' onClick={handleAddToWishList}>
          Add to Wish List
        </Button>
      </div>
    </Modal>
  )
}

export default CompanyDetails
