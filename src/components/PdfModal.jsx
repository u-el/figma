import { useEffect, useRef } from 'react'
import './PdfModal.css'

/** 전학 신청서 PDF 팝업 — 다운로드 / 출력 */
function PdfModal({ title, onClose, onDownload }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    dialog.showModal()
    return () => dialog.close()
  }, [])

  return (
    <dialog
      ref={dialogRef}
      className="pdf-modal"
      aria-labelledby="pdf-modal-title"
      onCancel={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
    >
      <h2 id="pdf-modal-title" className="pdf-modal__title">
        {title}
      </h2>
      <div className="pdf-modal__actions">
        <button type="button" className="pdf-modal__btn pdf-modal__btn--primary" onClick={onDownload}>
          다운로드
        </button>
        <button type="button" className="pdf-modal__btn" onClick={() => window.print()}>
          출력
        </button>
      </div>
    </dialog>
  )
}

export default PdfModal
