import { LeadStatus } from "@prisma/client";
import { CreateLeadAttributes, LeadsRepository, LeadWhereParams } from "../repositories/LeadsRepository.js";

interface GetLeadsWithPaginationParams {
    page?: number;
    pageSize?: number;
    name?: string;
    status?: LeadStatus;
    sortBy?: "name" | "status" | "createdAt";
    order?: "asc" | "desc";
}

export class LeadsService {
    constructor(private readonly leadsRepository: LeadsRepository) { }

    async getAllLeadsPaginated(params: GetLeadsWithPaginationParams) {
        const { name, status, page = 1, pageSize = 10, sortBy, order } = params

        const limit = pageSize
        const offset = (page) - 1 * limit

        const where: LeadWhereParams = {}

        if (name) where.name = { like: name, mode: "insensitive" }
        if (status) where.status = status

        const leads = await this.leadsRepository.find({ where, sortBy, order, limit, offset })
        const total = await this.leadsRepository.count(where)

        return {
            leads,
            meta: {
                page,
                pageSize,
                total,
                totalPages: Math.ceil(total / page)
            }
        }
    }

    async createLead(params: CreateLeadAttributes) {
        if (!params.status) params.status = "New"
        const newLead = await this.leadsRepository.create(params)
        return newLead
    }
}