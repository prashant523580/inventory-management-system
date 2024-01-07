import DashboardMainLayout from "@/components/layout/DashboardLayout"


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <DashboardMainLayout>
            {children}
        </DashboardMainLayout>
    )
}
