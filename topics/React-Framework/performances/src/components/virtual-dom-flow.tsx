export function VirtualDomFlowSvg() {
  return (
    <svg
      width="1000"
      height="520"
      viewBox="0 0 1000 520"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1000" height="520" fill="#f8fafc" />

      <text
        x="500"
        y="45"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="28"
        fontWeight="700"
        fill="#111827"
      >
        React Virtual DOM & Reconciliation Flow
      </text>

      <rect
        x="60"
        y="110"
        width="190"
        height="90"
        rx="16"
        fill="#ffffff"
        stroke="#cbd5e1"
        strokeWidth="2"
      />

      <text
        x="155"
        y="145"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="18"
        fontWeight="700"
        fill="#111827"
      >
        State Update
      </text>

      <text
        x="155"
        y="175"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="14"
        fill="#475569"
      >
        setCount()
      </text>

      <line
        x1="250"
        y1="155"
        x2="340"
        y2="155"
        stroke="#334155"
        strokeWidth="3"
        markerEnd="url(#arrow)"
      />

      <rect
        x="340"
        y="110"
        width="190"
        height="90"
        rx="16"
        fill="#ffffff"
        stroke="#cbd5e1"
        strokeWidth="2"
      />

      <text
        x="435"
        y="145"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="18"
        fontWeight="700"
        fill="#111827"
      >
        New Virtual DOM
      </text>

      <text
        x="435"
        y="175"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="14"
        fill="#475569"
      >
        new UI tree
      </text>

      <line
        x1="530"
        y1="155"
        x2="620"
        y2="155"
        stroke="#334155"
        strokeWidth="3"
        markerEnd="url(#arrow)"
      />

      <rect
        x="620"
        y="110"
        width="220"
        height="90"
        rx="16"
        fill="#ffffff"
        stroke="#cbd5e1"
        strokeWidth="2"
      />

      <text
        x="730"
        y="145"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="18"
        fontWeight="700"
        fill="#111827"
      >
        Reconciliation
      </text>

      <text
        x="730"
        y="175"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="14"
        fill="#475569"
      >
        compare old vs new
      </text>

      <line
        x1="730"
        y1="200"
        x2="730"
        y2="275"
        stroke="#334155"
        strokeWidth="3"
        markerEnd="url(#arrow)"
      />

      <rect
        x="620"
        y="275"
        width="220"
        height="90"
        rx="16"
        fill="#ffffff"
        stroke="#cbd5e1"
        strokeWidth="2"
      />

      <text
        x="730"
        y="310"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="18"
        fontWeight="700"
        fill="#111827"
      >
        Commit Phase
      </text>

      <text
        x="730"
        y="340"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="14"
        fill="#475569"
      >
        update real DOM
      </text>

      <line
        x1="620"
        y1="320"
        x2="530"
        y2="320"
        stroke="#334155"
        strokeWidth="3"
        markerEnd="url(#arrow)"
      />

      <rect
        x="310"
        y="275"
        width="220"
        height="90"
        rx="16"
        fill="#ecfdf5"
        stroke="#22c55e"
        strokeWidth="2"
      />

      <text
        x="420"
        y="310"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="18"
        fontWeight="700"
        fill="#166534"
      >
        Browser UI Updated
      </text>

      <text
        x="420"
        y="340"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="14"
        fill="#166534"
      >
        only changed part
      </text>

      <rect
        x="60"
        y="275"
        width="190"
        height="90"
        rx="16"
        fill="#fff7ed"
        stroke="#fb923c"
        strokeWidth="2"
      />

      <text
        x="155"
        y="310"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="18"
        fontWeight="700"
        fill="#9a3412"
      >
        Old Virtual DOM
      </text>

      <text
        x="155"
        y="340"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="14"
        fill="#9a3412"
      >
        previous UI tree
      </text>

      <line
        x1="250"
        y1="320"
        x2="620"
        y2="180"
        stroke="#fb923c"
        strokeWidth="2"
        strokeDasharray="8 6"
      />

      <text
        x="500"
        y="440"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="18"
        fontWeight="700"
        fill="#111827"
      >
        Main Point: React compares trees and updates only necessary parts.
      </text>

      <defs>
        <marker
          id="arrow"
          markerWidth="12"
          markerHeight="12"
          refX="10"
          refY="6"
          orient="auto"
        >
          <path d="M2,2 L10,6 L2,10 Z" fill="#334155" />
        </marker>
      </defs>
    </svg>
  );
}
